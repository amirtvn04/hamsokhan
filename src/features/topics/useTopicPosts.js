import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export function useTopicPosts(topicId) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!topicId) return;

    let channel;

    const fetchPosts = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("post_stats")
        .select("*")
        .eq("topic_id", topicId)
        .order("created_at", { ascending: true });

      if (!error) {
        setPosts(data || []);
      }

      setLoading(false);
    };

    fetchPosts();

    channel = supabase
      .channel(`topic-posts-${topicId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "posts",
          filter: `topic_id=eq.${topicId}`,
        },
        async (payload) => {
          const { data } = await supabase
            .from("post_stats")
            .select("*")
            .eq("id", payload.new.id)
            .single();

          if (!data) return;

          setPosts((prev) => {
            if (prev.some((p) => p.id === data.id)) return prev;
            return [...prev, data];
          });
        }
      )
      .subscribe();

    return () => {
      if (channel) supabase.removeChannel(channel);
    };
  }, [topicId]);

  return { posts, loading };
}
