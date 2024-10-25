import React, { useState } from "react";
import { Typography, Button } from "antd";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"; // Importing plus and minus icons
import "./sireprintingtxt.css"; // Ensure your styles are still in place

const { Paragraph } = Typography;

function Sireprintingtxt1() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="sire-txt-main">
      <p className="how-txt">How it works</p>
      <img
        src="../images/how.avif"
        alt="Descriptive Alt Text"
        className="img-sire-txt"
      />
      <Paragraph className="learn-txt">
        {expanded ? (
          <span>
            <h2 className="sire-txt-title">
              Get Prime Custom Packaging Boxes For Your Businesses
            </h2>
            <p className="sire-txt-content">
              While maintaining our standard of delivering custom packaging boxes for some time we can take care of small and large businesses as well. If you are new to the marketplace or struggling to get any space we are here to support you in this difficult time. We provide relaxation to small businesses by giving them custom printing packaging boxes at an affordable price that will meet all the latest design standards and have a premium quality that will grab your heart instantly. This will make us your large preference whenever you want custom packaging and printing.
            </p>

            <h2 className="sire-txt-title">
              Best Company For Custom Packaging Boxes Wholesale
            </h2>
            <p className="sire-txt-content">
              When we talk about custom printing boxes at wholesale, you can not find better than us. We have high-quality printing and packaging machines with all technical staff looking at them. We deliver custom packaging boxes with logos according to your specifications and recommendations on the wholesale rate that are secure and do not harm your product inside. It gives extra comfort to our customers which will strengthen our relations with customers. We are proud to provide you with all these services just because you can build your reputation in the marketplace and increase your sales in this hard period.
            </p>

            <h2 className="sire-txt-title">
              Make your Custom Boxes More Impressive
            </h2>
            <p className="sire-txt-content">
              If you want high-quality custom boxes that have glamorous design and impressive features in one place. So you are at the right place, Sire Printing is here to give you custom boxes at an affordable rate. We aim to provide our customers with high-quality custom printed boxes that resemble decorative materials, helping them achieve the recognition they deserve. We make cheap custom boxes that are fit for your product and at the same time, they cannot harm it during delivery. So you have both these benefits right at the same place which is a big relief for any customers so get ready to get what you want.
            </p>

            <h2 className="sire-txt-title">
              We are Here to Provide 24/7 Customer Support
            </h2>
            <p className="sire-txt-content">
              We are passionate here to serve brands and businesses with high-quality custom printed packaging boxes having out of the box styles, and elegant designs. We are available 24/7 for your assistance on live chat by clearing every doubt in your mind in the shortest possible time. Our team makes it easy for you to understand that we deliver high-standard quality products that reach your heart instantly. Order us now by filling out the specification form or by calling us at (410) 834-9965. For feedback or any questions, we are here to help you support@sireprinting.com we will be more than happy to serve you any time.
            </p>

            <h2 className="sire-txt-title">
              Stylish & Enticing Custom Boxes With Logo
            </h2>
            <p className="sire-txt-content">
              At Sire Printing, we provide meticulous care to make stylish and enticing custom boxes with your brand logo. As we all know, logos are the brand identity of a company. So everyone wants custom boxes at wholesale that have an elegant logo on them. Logos have a huge impact on brand representation and an attractive logo will satisfy the company’s owner. Your satisfaction is our pride and we always keep customers' satisfaction on top. You can also check our custom pillow boxes and custom soap boxes. We have all of them in plain and printed designs, just for you. For that purpose, we used the latest instruments and techniques that give us custom printed boxes with logos. There is no chance that your logo will be displaced or have some defects with it. You can get printed boxes with a logo at affordable prices that will be your brand identity and you will be proud of it.
            </p>

            <Button
              type="link"
              onClick={handleToggle}
              style={{ padding: 0, color: "black", fontWeight: "bold" }}
            >
              Read Less
              <AiOutlineMinus style={{ fontSize: "18px" }} /> {/* Minus icon */}
            </Button>
          </span>
        ) : (
          <span>
            <h2 className="sire-txt-title">
              Sire Printing Offers Premium-Quality Custom Boxes
            </h2>
            <p className="sire-txt-content">
              At Sire Printing, we specialize in high-quality custom boxes that prioritize both design and safety, enhancing your brand’s reputation. Our premium packaging solutions, available at wholesale prices, are designed to engage customers and boost sales. With a variety of elegant options—including spot UV and perforation—our custom printed boxes come in a wide range of colors and styles, with no minimum order required. We offer eco-friendly materials like cardboard, kraft, and rigid stock. Our custom printing not only elevates visual appeal but also ensures your products stand out in the marketplace. Explore our portfolio to see our work. Choose Sire Printing for tailored packaging solutions that meet your unique needs.
            </p>

            <Button
              type="link"
              onClick={handleToggle}
              style={{ padding: 0, color: "black", fontWeight: "bold" }}
            >
              Read More
              <AiOutlinePlus style={{ fontSize: "18px" }} /> {/* Plus icon */}
            </Button>
          </span>
        )}
      </Paragraph>
    </div>
  );
}

export default Sireprintingtxt1;
