type Props = {
  src: string;
};

const mobClassName =
  "align-middle object-cover rounded-full overflow-clip w-[40px] h-[40px]";
const mdClassName = "md:w-[160px] md:h-[160px]";
const className = `${mobClassName} ${mdClassName}`;

function ProfileImage(props: Props) {
  const { src } = props;

  return (
    <img
      className={className}
      alt="profile-image"
      src={src}
      width={160}
      height={160}
      fetchPriority="high"
      decoding="async"
    />
  );
}
export default ProfileImage;
