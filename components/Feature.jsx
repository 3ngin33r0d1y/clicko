function Feature({ icon, title, desc }) {
  return (
    <div className="flex flex-col justify-center w-full md:w-1/3 p-16 hover:shadow-[0px_0px_20px_10px_#00000024]">
      <span>{icon}</span>
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <p className="text-lg text-neutral-400">{desc}</p>
    </div>
  );
}

export default Feature;
