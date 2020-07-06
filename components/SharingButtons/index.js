import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

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
      <TwitterShareButton
        url={`https://www.google.com`}
        title={`Are you joining me to ${name}? @ [Tag your friends]`}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <EmailShareButton
        url={`https://www.google.com`}
        subject={`Are you joining me to ${name}?`}
        body={`Hi! 
        Are you joining me to ${name}? 
        It looks like a super dope indoor ski place! 
        Check it out -->`}
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  );
}
