import React from "react";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import logo from "../assestPic/Nest.png"
import googlePlay from "../assestPic/google.png";
import appStore from "../assestPic/app.png";
import payments from "../assestPic/payment.png"; 

function Footer() {
  return (
    <footer className="bg-white text-gray-800 px-8 py-12 border-t border-gray-200 container mx-auto mt-6">
     
      <div className="max-w-7xl mx-auto grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-6">
       
        <div className="space-y-4">
          <img src={logo} alt="Nest Mart" className="w-36" />
          <p className="text-sm text-gray-600 leading-relaxed">
            Awesome grocery store website template
          </p>
          <p className="text-sm text-gray-500">Kent, Utah 53127 United States</p>

          <div className="space-y-2">
            <p className="flex items-center gap-2 text-sm text-gray-700">
              <FaPhoneAlt className="text-green-600" /> +91-540-025-124553
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-700">
              <FaEnvelope className="text-green-600" /> sale@Nest.com
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-700">
              <FaClock className="text-green-600" /> Hours: 10:00 - 18:00, Mon - Sat
            </p>
          </div>
        </div>

      
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-900">Company</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
            <li>Support Center</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-900">Account</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Sign In</li>
            <li>View Cart</li>
            <li>My Wishlist</li>
            <li>Track My Order</li>
            <li>Help Ticket</li>
            <li>Shipping Details</li>
            <li>Compare Products</li>
          </ul>
        </div>

 
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-900">Corporate</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Become a Vendor</li>
            <li>Affiliate Program</li>
            <li>Farm Business</li>
            <li>Our Suppliers</li>
            <li>Accessibility</li>
            <li>Promotions</li>
          </ul>
        </div>

      
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-900">Popular</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Milk & Flavoured Milk</li>
            <li>Butter and Margarine</li>
            <li>Eggs Substitutes</li>
            <li>Marmalades</li>
            <li>Sour Cream and Dips</li>
            <li>Tea & Kombucha</li>
            <li>Cheese</li>
          </ul>
        </div>

        
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-900">Install App</h4>
          <p className="text-sm text-gray-600 mb-3">
            From App Store or Google Play
          </p>
          <div className="flex gap-2 mb-4">
            <img src={googlePlay} alt="Google Play" className="w-28" />
            <img src={appStore} alt="App Store" className="w-28" />
          </div>
          <p className="text-sm text-gray-600 mb-2">Secured Payment Gateways</p>
          <img
            src={payments}
            alt="Visa, MasterCard, Maestro"
            className="w-36"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;