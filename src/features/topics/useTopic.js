import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export function useTopic(topicId) {
  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!topicId) return;

    let isMounted = true;

    const fetchTopic = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data, error } = await supabase
          .from("topic_stats")
          .select("*")
          .eq("id", topicId)
          .single();

        if (error) throw error;

        if (isMounted) setTopic(data);
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

  return { topic, loading, error };
}
