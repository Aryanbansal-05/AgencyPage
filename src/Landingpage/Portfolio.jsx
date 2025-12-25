const projects = [
  {
    id: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBn8Rlb4IErREKp8RNVdYkA6ik7xKPdXMvPE_cvjejJ-ufhryFQjsQmBoXtyeMeA5c_wDaDqpXuegUPN03mpia7TBFpUyftGBnn_3uolMORl5wppLim8bNCcUMZgWllWcTPkiZUQUMH8om-MoEvryITp7eyK-GPgoa3pXQQMQL7gUG8dBGpovAi289y84u_Q2zmUUDZGXI_cBiArpDL7u5SRmxFST5Bo4Q1AE7FlyI3QuhicF0Pu-lrrTdYteJabRknUmyCyLvMzQ79",
    alt: "Project One",
  },
  {
    id: 2,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhQf1OjufeTj_mIOX8FVpXeH1zP8bpy2cdVn4KYYAmkchN-J758hG1jnyAIfSoPrFA5k7-6EJTuT2rf882lcmKQrSHwh0lHRLEqmUwJl6EuKoThA76nKrbsd451qmCQPowvoO-NvD3c-mTX82sNLIL9mgh33fYA9dSgX9GvdVJGS9oK_GKHeKQJZtqFeym8j97NEDSBGTLsVe6didamWuSYoKjcMrsDDb70X1X0PI9nVqMUqX0H6OgM7UFwjQgbu9LWvdwlwiCoJZH",
    alt: "Project Two",
  },
  {
    id: 3,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8vJSXbZQGZ3mL3eyARbBPCFN9ztfA1Te3kQ86gK6CBpC_F590IncJLkdpVsUiBCn1QtCDvNgbn1WsfXTK_GLXp8UB1LbebBjEYUxv2tp6quSQPyXHw_6YeVOIMgw7Gpr9D5kfXGP9A7LgVPVspFv0QAt74e71bl0MCxlZV73l9dU8V7b_stZ9hXkxU_yzUB-y-HCr9rM5bQS2ciM2wIgWjafPDXpU9-RNs7Y6ezaPy1h3tGoEdQLrQPj8ge8IE_BmDuJDq8aqYAPh",
    alt: "Project Three",
  },
  {
    id: 4,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYyduHBe4DSMAVGqY02YzZXN2H54RO89jJ2IyIy9lvcXsLBQo87ZgMlq_XZo5jCQAVPLwisN2BWiNAr-2dEy81OCHgJI3lo6M-1Ln7OGXHKzU20eSpLmLe6wkpGdItQv0_OIkZ353L7GU4kHvJDhVZdQkjSEPFhPtlpgK3KqmR1q0Rv_eYZs4EyYXHW-8ga7_ls1k8wRcsYLxk5Su-e78BdJIn860hCkHhp8LgO0FM5AD2IUALvfAPifdGfs1N0gh_lgh5FiJEpqMA",
    alt: "Project Four",
  },
]

const Portfolio = () => {
  return (
    <section className="w-full px-8 py-24 bg-[#140c1c]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="text-purple-500 text-sm font-semibold tracking-wider">
              PORTFOLIO
            </span>
            <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-white">
              Selected Work
            </h2>
          </div>

          <button className="hidden md:flex items-center gap-2 text-white border border-white/20 px-5 py-2 rounded-lg hover:border-purple-500 transition">
            View all projects <span>↗</span>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>

        {/* Mobile button */}
        <div className="mt-10 md:hidden">
          <button className="flex items-center gap-2 text-white border border-white/20 px-5 py-2 rounded-lg hover:border-purple-500 transition">
            View all projects <span>↗</span>
          </button>
        </div>

      </div>
    </section>
  )
}

export default Portfolio
