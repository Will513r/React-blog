import type { PostData } from "../posts/posts";
import underdogLogo from "../assets/underdog.jpg";

type PostProps = { post: PostData };

export function Post({ post }: PostProps) {
  const {
    title,
    description,
    published,
    date: dateString,
    slug,
    tags,
    imageUrl,
    author,
    authorImage,
  } = post.metadata;
  const date = new Date(dateString);
  return (
    <div className="text-black">
      {/* Container for the blog post */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-10">
          <h1 className="text-2xl font-semibold capitalize text-gray-800 lg:text-3xl dark:text-white">
            From the blog
          </h1>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
            {slug}
          </p>
          <div className="mt-8 flex flex-col items-center lg:-mx-6">
            {/* Image of the blog post */}
            <img
              className="h-72 w-full rounded-xl object-cover lg:mx-6 lg:h-96"
              src={imageUrl ? imageUrl : underdogLogo}
              alt=""
            />

            <div className="mt-6 lg:mx-6 lg:mt-0">
              {/* Date of the blog post */}
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {date.toLocaleDateString()}
              </p>
              {/* Title of the blog post */}
              <p className="text-xl font-semibold text-gray-800 dark:text-white">
                {title}
              </p>
              <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
                {tags}
              </p>
              <p className="mb-8 block font-sans text-base font-normal leading-relaxed !text-gray-500 text-inherit antialiased">
                {description}
              </p>
              {/* Content of the blog post */}
              <div
                className="mt-3 text-sm text-gray-500 md:text-sm dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: post.html }}
              ></div>

              {/* Author information */}
              <div className="mt-6 flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover object-center"
                  src={authorImage ? authorImage : underdogLogo}
                />

                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">
                    {author}
                  </h1>
                  <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
                    {published}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
