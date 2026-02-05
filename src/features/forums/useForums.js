import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export function useForums(categorySlug = null) {
  const [forums, setForums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForums = async () => {
      setLoading(true);

      let query = supabase
        .from("forum_stats")
        .select(`
          id,
          title,
          slug,
          description,
          category_id,
          category_title,
          category_slug,
          topics_count,
          posts_count,
          last_activity_at,
          last_author_name
        `)
        .order("last_activity_at", { ascending: false });

      if (categorySlug) {
        query = query.eq("category_slug", categorySlug);
      }

      const { data, error } = await query;

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }

      const grouped = data.reduce((acc, forum) => {
        const categoryId = forum.category_id;

        if (!acc[categoryId]) {
          acc[categoryId] = {
            category: {
              id: forum.category_id,
              title: forum.category_title,
              slug: forum.category_slug,
            },
            forums: [],
          };
        }

        acc[categoryId].forums.push(forum);
        return acc;
      }, {});

      setForums(Object.values(grouped));
      setLoading(false);
    };

    fetchForums();
  }, [categorySlug]);

  return { forums, loading, error };
}
