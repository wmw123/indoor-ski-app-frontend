import { FacebookShareButton, FacebookIcon } from "react-share";

export default function SharingButtons({ id, name }) {
  return (
    <div>
      <FacebookShareButton
        // update URL once it's live
        url={`https://www.google.com`}
        quote={`Are you joining me to ${name}? @ [Tag your friends]`}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
  );
}
