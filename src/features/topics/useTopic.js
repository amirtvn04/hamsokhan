import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export function useTopic(topicId) {
  const [topic, setTopic] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!topicId) return;

    let isMounted = true;

    const fetchTopic = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data: topicData, error: topicError } = await supabase
          .from("topics")
          .select("*")
          .eq("id", topicId)
          .single();

        if (topicError) throw topicError;

        if (isMounted) setTopic(topicData);

        const { data: postsData, error: postsError } = await supabase
          .from("posts")
          .select("*")
          .eq("topic_id", topicId)
          .order("created_at", { ascending: true });

        if (postsError) throw postsError;

        if (isMounted) setPosts(postsData || []);
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchTopic();

    return () => {
      isMounted = false;
    };
  }, [topicId]);

  return { topic, posts, loading, error };
}
