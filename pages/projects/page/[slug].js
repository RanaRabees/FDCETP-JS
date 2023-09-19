import Pagination from "../../../layouts/components/Pagination";
import config from "../../../config/config.json";
import Base from "../../../layouts/Baseof";
import { getListPage, getSinglePage } from "../../../lib/contentParser";
import { parseMDX } from "../../../lib/utils/mdxParser";
import { markdownify } from "../../../lib/utils/textConverter";
import Posts from "../../../layouts/partials/Posts";
const { project_folder } = config.settings;

// project pagination
const projectPagination = ({ postIndex, posts, currentPage, pagination }) => {
  const indexOfLastPost = currentPage * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const { frontmatter, content } = postIndex;
  const { title } = frontmatter;

  return (
    <Base title={title}>
      <section className="section">
        <div className="container">
          {markdownify(title, "h1", "h1 text-center font-normal text-[56px]")}
          <Posts posts={currentPosts} />
          <Pagination
            section={project_folder}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </div>
      </section>
    </Base>
  );
};

export default projectPagination;

// get project pagination slug
export const getStaticPaths = () => {
  const getAllSlug = getSinglePage(`content/${project_folder}`);
  const allSlug = getAllSlug.map((item) => item.slug);
  const { pagination } = config.settings;
  const totalPages = Math.ceil(allSlug.length / pagination);
  let paths = [];

  for (let i = 1; i < totalPages; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString(),
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
};

// get project pagination content
export const getStaticProps = async ({ params }) => {
  const currentPage = parseInt((params && params.slug) || 1);
  const { pagination } = config.settings;
  const posts = getSinglePage(`content/${project_folder}`).sort(
    (post1, post2) =>
      new Date(post2.frontmatter.date) - new Date(post1.frontmatter.date)
  );
  const postIndex = await getListPage(`content/${project_folder}/_index.md`);
  const mdxContent = await parseMDX(postIndex.content);

  return {
    props: {
      pagination: pagination,
      posts: posts,
      currentPage: currentPage,
      postIndex: postIndex,
      mdxContent: mdxContent,
    },
  };
};
