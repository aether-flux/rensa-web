import { useRouter } from "next/router";
import { CodeSnippet } from "@/app/_components/Snippet";

export default function DocsPage () {
  const router = useRouter();
  const { slug } = router.query;
  const [mdxSrc, setMdxSrc] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchMdx = async () => {
      const res = await fetch(`/api/docs/${slug}`);
      const data = await res.json();

      if (data.mdxSource) {
        setMdxSrc(data.mdxSource);
      }
    }

    fetchMdx();
  }, [slug]);

  if (!mdxSrc) return <p>Loading...</p>;

  return (
    <MdxRemote {...mdxSrc} components={mdxComp} />
  )
} 
