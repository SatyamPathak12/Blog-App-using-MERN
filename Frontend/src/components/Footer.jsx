import React from 'react';
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from 'react-icons/bs';

export default function FooterComponent() {
  return (
    <Footer container className="border-t-8 border-teal-500 bg-gray-50 text-gray-800">
      <div className="w-full max-w-7xl mx-auto py-6">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5 sm:mt-0">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 rounded-lg text-white">
                Blog
              </span>
              App
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:mt-0 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="http://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600"
                >
                  Google
                </Footer.Link>
              </Footer.LinkGroup>
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/About"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600"
                >
                  Blog-App
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="http://www.github.com/satyampathak12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600"
                >
                  GitHub
                </Footer.Link>
              </Footer.LinkGroup>
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-gray-600">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600"
                >
                  Privacy Policy
                </Footer.Link>
              </Footer.LinkGroup>
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-gray-600">
                  Terms of Service
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="my-4" />
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Blog-App"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="text-gray-600" />
            <Footer.Icon href="#" icon={BsInstagram} className="text-gray-600" />
            <Footer.Icon href="#" icon={BsTwitterX} className="text-gray-600" />
            <Footer.Icon href="#" icon={BsLinkedin} className="text-gray-600" />
          </div>
        </div>
      </div>
    </Footer>
  );
}


