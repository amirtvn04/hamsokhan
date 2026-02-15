import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";

export function useHotTopics(limit = 6) {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHotTopics() {
      const { data, error } = await supabase
        .from("forum_topics")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(limit);

      if (!error) setTopics(data);
      setLoading(false);
    }

    fetchHotTopics();
  }, [limit]);

  return { topics, loading };
}
