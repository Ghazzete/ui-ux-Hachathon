import Image from "next/image";

export default function Home() {
  const posts = [
    {
      title: "Going all-in with millennial design",
      date: "03 Aug 2022",
      image: "/image1.svg",
    },
    {
      title: "Exploring new ways of decorating",
      date: "03 Aug 2022",
      image: "/image2.svg",
    },
    {
      title: "Handmade pieces that took time to make",
      date: "03 Aug 2022",
      image: "/image3.svg",
    },
    {
      title: "Modern home in Milan",
      date: "03 Aug 2022",
      image: "/image4.svg",
    },
    {
      title: "Colorful office redesign",
      date: "03 Aug 2022",
      image: "/image5.svg",
    },
  ];

  return (
    <div className=" px-4 py-8">
      {/* Hero Section */}
      <div
        id="hero"
        className="relative h-[316px] w-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/Rectangle 1.svg')" }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full absolute top-0 left-0">
        <Image
            src="/logo1.svg"
            alt="logo"
            height={32}
            width={50}
            className="object-contain"
          />
          <h1 className="text-[48px] font-medium text-[#000000]">Blog</h1>
          <div className="flex flex-row items-center">
            <h2 className="font-medium text-[#000000] flex items-center">
              Home
              <span className="ml-2">
                <Image src="/icon.svg" alt="icon" height={8} width={14} />
              </span>
            </h2>
            <p className="font-light text-[#000000] ml-2">blog</p>
          </div>
        </div>
      </div>

      {/* Blog Post Section */}
      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        {/* Blog Section */}
        <div className="flex flex-col gap-6 lg:w-2/3">
          <Image
            src="/blog.svg"
            alt="Blog Post"
            className="rounded-lg w-full h-[500px] object-cover"
          />
          <div className="flex flex-col space-y-4">
            <div className="text-gray-600 text-sm flex space-x-4">
              <span>👤 Admin</span>
              <span>📅 14 Oct 2022</span>
              <span>📂 Wood</span>
            </div>
            <h2 className="text-[30px] font-medium">
              Going all-in with millennial design
            </h2>
            <p className="text-[#9F9F9F] text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet.
            </p>
            <a href="#" className="text-[#000000] hover:underline">
              Read more
            </a>
          </div>
        </div>

        {/* Recent Posts Section */}
        <div className="flex flex-col lg:w-1/3">
          <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
          <div className="space-y-4">
            {posts.map((post, index) => (
              <div key={index} className="flex items-center space-x-4">
                {/* Post Image */}
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                {/* Post Title and Date */}
                <div>
                  <h4 className="text-sm font-medium">{post.title}</h4>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:w-2/3 mt-8">
          <Image
            src="/blog2.svg"
            alt="Blog Post"
            className="rounded-lg w-full h-[500px] object-cover"
          />
          <div className="flex flex-col space-y-4">
            <div className="text-gray-600 text-sm flex space-x-4">
              <span>👤 Admin</span>
              <span>📅 14 Oct 2022</span>
              <span>📂 Wood</span>
            </div>
            <h2 className="text-[30px] font-medium">
              Going all-in with millennial design
            </h2>
            <p className="text-[#9F9F9F] text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet.
            </p>
            <a href="#" className="text-[#000000] hover:underline">
              Read more
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:w-2/3 mt-8">
          <Image
            src="/blog3.svg"
            alt="Blog Post"
            className="rounded-lg w-full h-[500px] object-cover"
          />
          <div className="flex flex-col space-y-4">
            <div className="text-gray-600 text-sm flex space-x-4">
              <span>👤 Admin</span>
              <span>📅 14 Oct 2022</span>
              <span>📂 Wood</span>
            </div>
            <h2 className="text-[30px] font-medium">
              Going all-in with millennial design
            </h2>
            <p className="text-[#9F9F9F] text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet.
            </p>
            <a href="#" className="text-[#000000] hover:underline">
              Read more
            </a>
          </div>
        </div>
    </div>
  );
}
