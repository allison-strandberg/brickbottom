import SocialLink from './socialLink';

interface SocialProps {
  email?: string,
  website?: string,
  website2?: string,
  instagram?: string,
  address?: string,
  phone?: string,
  twitter?: string,
  facebook?: string,
}

export default function Social({
  email,
  website,
  website2,
  instagram,
  phone,
  address,
  twitter,
  facebook,
}: SocialProps) {
  return (
    <div className="text-white font-open-sans">
      <SocialLink icon="email" item={email} />
      <SocialLink icon="website" item={website} />
      <SocialLink icon="website" item={website2} />
      <SocialLink icon="instagram" item={instagram} />
      <SocialLink icon="address" item={address} />
      <SocialLink icon="phone" item={phone} />
      <SocialLink icon="twitter" item={twitter} />
      <SocialLink icon="facebook" item={facebook} />
    </div>
  );
}
