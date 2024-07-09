export function PostPreview({
  postImage,
  authorImage,
}: {
  postImage: string;
  authorImage: string;
}) {
  return (
    <div className="flex flex-col text-gray-700">
      <div className="relative m-0 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <img
          src={postImage}
          alt="Revolutionizing Our Production Process"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6 px-2 sm:pl-4 sm:pr-6">
        <p className="mb-4 block font-sans text-sm font-light leading-normal text-inherit antialiased">
          Technology
        </p>
        <a
          href="#"
          className="text-blue-gray-900 mb-2 block font-sans text-xl font-semibold normal-case leading-snug tracking-normal antialiased transition-colors hover:text-gray-700"
        >
          Revolutionizing Our Production Process
        </a>
        <p className="mb-8 block font-sans text-base font-normal leading-relaxed !text-gray-500 text-inherit antialiased">
          Learn how our recent investment in new technology has revolutionized
          our production process, leading to improved efficiency and product
          quality.
        </p>
        <div className="flex items-center gap-4">
          <img
            src={authorImage}
            className="relative inline-block h-12 w-12 !rounded-full object-cover object-center"
          />
          <div>
            <p className="text-blue-gray-900 mb-0.5 block font-sans text-base font-light leading-relaxed antialiased">
              {/* William Ray */}
            </p>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
              2022-08-15
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
