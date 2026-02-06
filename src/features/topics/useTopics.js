import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export function useTopics(forumSlug) {
    const [topics, setTopics] = useState([])
    const [topicLoading, setTopicLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!forumSlug) return

        const fetchTopics = async () => {
            setTopicLoading(true)

            const { data, error } = await supabase
                .from("forum_topics")
                .select("*")
                .eq("forum_slug", forumSlug)
                .order("is_pinned", { ascending: false })
                .order("created_at", { ascending: false });

            if (error) {
                setError(error.message);
            } else {
                setTopics(data);
            }

            setTopicLoading(false);
        }

        fetchTopics();
    }, [forumSlug])

    return { topics, topicLoading, error }
}