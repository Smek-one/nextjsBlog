import Link from "next/link";
import {RiTwitterXFill} from 'react-icons/ri';
import {SiInstagram} from 'react-icons/si';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Suivez-nous sur les réseaux sociaux</h4>
          </div>
          <div>
            <div>
                <Link href="https://twitter.com/e" rel="noopener noreferrer">
                <RiTwitterXFill />
                </Link>
                
                <Link href="https://www.instagram.com/" rel="noopener noreferrer">
                <SiInstagram />
                </Link>
                </div>
          </div>
        </div>
      </div>
    </footer>
  );
}