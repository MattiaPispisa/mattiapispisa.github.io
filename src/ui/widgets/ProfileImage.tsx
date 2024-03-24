type Props = {
  src: string;
};

function ProfileImage(props: Props) {
  const { src } = props;

  return (
    <img
      className={`container align-middle object-cover rounded-full overflow-clip md:w-[160px] md:h-[160px]`}
      alt="profile-image"
      src={src}
    />
  );
}
export default ProfileImage;
