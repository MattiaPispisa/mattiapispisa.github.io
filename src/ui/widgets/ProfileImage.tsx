import onScreen from "../../functions/screens";

type Props = {
  src: string;
};

const className = onScreen({
  def: [
    "align-middle object-cover rounded-full overflow-clip w-[40px] h-[40px]",
  ],
  md: ["w-[160px]", "h-[160px]"],
});

function ProfileImage(props: Props) {
  const { src } = props;

  return <img className={className} alt="profile-image" src={src} />;
}
export default ProfileImage;
