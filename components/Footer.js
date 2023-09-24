import Link from "next/link";
import {RiTwitterXFill} from 'react-icons/ri';
import {SiInstagram} from 'react-icons/si';


export default function Footer() {
  return (
    <footer>
      <div className="">
        <div className="">
          <div className="">
            <h4 className="footTitle">Suivez-nous sur les réseaux sociaux</h4>
          </div>
          <div>
            <div className="links">
              
                <Link href="https://twitter.com/smek_one" rel="noopener noreferrer" className="socialLink">
                <RiTwitterXFill />
                </Link>
               
               
                <Link href="https://www.instagram.com/smek_one_pics/" rel="noopener noreferrer" className="socialLink">
                <SiInstagram />
                </Link>
                </div>
                </div>
          </div>
        </div>
 
    </footer>
  );
}