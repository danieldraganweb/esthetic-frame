import React from "react";
import Image from "next/image";
import styles from "./AllGoogleReviews.module.scss";
import Link from "next/link";

const AllReviews: React.FC = ({}) => {
  return (
    <div className={styles["main"]}>
      <Link
        href="https://www.google.com/maps/place/Esthetic+Frame+by+Alexandra+Ivan+@Wellbeing/@48.2252518,16.3533662,17z/data=!3m1!5s0x476d07a465763a73:0x104959fe3090b402!4m8!3m7!1s0x476d07acca53354b:0xc288f4e3766f27e3!8m2!3d48.2252483!4d16.3559411!9m1!1b1!16s%2Fg%2F11ksb9ftqg?entry=ttu"
        passHref
        target="_blank"
      >
        <Image
          unoptimized={true}
          src="/AllReviewsRating.svg"
          alt="services"
          width={394}
          height={150}
          priority={true}
          style={{
            objectFit: "cover",
            borderRadius: "1em",
          }}
          className={styles["services-image"]}
          blurDataURL="/services5.jpg"
          placeholder="blur"
        />
      </Link>
    </div>
  );
};

export default AllReviews;
