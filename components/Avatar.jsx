import Image from "next/image";

const Avatar = () => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-end justify-end pr-0 xl:pr-8 lg:pr-[0%] pointer-events-none overflow-visible">
      {/* responsive container: small -> small, md -> medium, lg -> large */}
      <div className="relative w-[110px] h-[100px] sm:w-[190px] sm:h-[175px] md:w-[310px] md:h-[285px] lg:w-[480px] lg:h-[440px]">
        <Image
          src="/avatar.png"
          alt="avatar"
          fill
          className="object-contain translate-z-0"
        />
      </div>
    </div>
  );
};

export default Avatar;
