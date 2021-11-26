import ClubLogoSvg from 'icons/club-logo.svg';

const LandingPage = () => {
  return (
    <>
      <div className="bg-black h-screen w-full flex justify-center items-center flex-col">
        <ClubLogoSvg className="w-[100px]" />
        <p className="text-white text-[23px] mt-[8px]">
          takehome
        </p>
      </div>
    </>
  );
};

export default LandingPage;
