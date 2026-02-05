import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export function useForums() {
  const [forums, setForums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForums = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("forum_stats")
        .select(`
          id,
          title,
          slug,
          category_id,
          topics_count,
          posts_count,
          description,
          last_activity_at,
          last_author_name,
          categories (
            id,
            title
          )
        `)
        .order("last_activity_at", { ascending: false });

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }

      const grouped = data.reduce((acc, forum) => {
        const category = forum.categories;

        if (!acc[category.id]) {
          acc[category.id] = {
            category,
            forums: [],
          };
        }

        acc[category.id].forums.push(forum);
        return acc;
      }, {});

      setForums(Object.values(grouped));
      setLoading(false);
    };

    fetchForums();
  }, []);

  return { forums, loading, error };
}
