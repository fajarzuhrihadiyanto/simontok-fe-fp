import Link from "next/link";
import React from 'react';
import { BACKEND_URL } from "../config";

export const RightSidebar = () => {

  const [username, setUsername] = React.useState('')
  const [joinDate, setJoinDate] = React.useState('')

  React.useEffect(() => {
    const getUser = async () => {

      const token = localStorage.getItem('token')

      const response = await fetch(`${BACKEND_URL}/api/user`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })

      const data = await response.json()
      console.log(data)
      setUsername(data.name)
      const date = new Date(data.created_at)
      setJoinDate(`${date.toLocaleDateString('en-ID', {month: 'long', year: 'numeric'})}`)
    }

    getUser()
  }, [])

  return (
    <>
      <div className="fixed right-0 top-0 bottom-0 w-80 py-8 pl-6 pr-8 border-l-2 border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-gray-800">Halo {username}</p>
            <p className="text-sm text-gray-800">Selamat Datang</p>
          </div>

          <div className="flex space-x-2 h-full">
            <button className="bg-gray-50 p-2 rounded-md drop-shadow">
              <svg
                width="28"
                height="28"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 36.6666C18.1667 36.6666 16.6667 35.1666 16.6667 33.3333H23.3334C23.3334 35.1666 21.8334 36.6666 20 36.6666ZM10 26.6666V18.3333C10 13.2166 12.7167 8.93329 17.5 7.79996V6.66663C17.5 5.28329 18.6167 4.16663 20 4.16663C21.3834 4.16663 22.5 5.28329 22.5 6.66663V7.79996C27.2667 8.93329 30 13.2 30 18.3333V26.6666L33.3334 30V31.6666H6.6667V30L10 26.6666ZM13.3334 28.3333H26.6667V18.3333C26.6667 14.2 24.15 10.8333 20 10.8333C15.85 10.8333 13.3334 14.2 13.3334 18.3333V28.3333ZM27.3667 6.79996L29.75 4.41663C33.75 7.46663 36.3834 12.1666 36.6167 17.5H33.2834C33.1653 15.3863 32.572 13.3265 31.5476 11.4739C30.5232 9.62136 29.0941 8.02371 27.3667 6.79996V6.79996ZM6.7167 17.5H3.38337C3.63337 12.1666 6.2667 7.46663 10.25 4.41663L12.6167 6.79996C10.8967 8.02974 9.47398 9.62914 8.45301 11.4807C7.43204 13.3323 6.83875 15.3891 6.7167 17.5Z"
                  fill="black"
                />
              </svg>
            </button>
            <Link href="/">
            <button className="bg-gray-50 p-2 rounded-md drop-shadow">
              <svg
                width="28"
                height="28"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7395 21.6667V18.3334H28.7395V13.3334L37.0729 20L28.7395 26.6667V21.6667H13.7395Z"
                  fill="black"
                />
                <path
                  d="M7.07292 5H22.0729C23.9113 5 25.4062 6.495 25.4062 8.33333V15H22.0729V8.33333H7.07292V31.6667H22.0729V25H25.4062V31.6667C25.4062 33.505 23.9113 35 22.0729 35H7.07292C5.23459 35 3.73959 33.505 3.73959 31.6667V8.33333C3.73959 6.495 5.23459 5 7.07292 5Z"
                  fill="black"
                />
              </svg>
            </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-16 mb-4">
          <button className="bg-gray-50 p-2 rounded-lg">
            <svg
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.008 84.462C10.0109 84.6669 10.0541 84.8692 10.1351 85.0574C10.2162 85.2455 10.3335 85.4159 10.4804 85.5587C10.6274 85.7015 10.801 85.814 10.9913 85.8897C11.1817 85.9655 11.3852 86.0029 11.59 86H84.404C84.609 86.0032 84.8127 85.9659 85.0033 85.8903C85.1939 85.8147 85.3678 85.7023 85.5149 85.5594C85.662 85.4166 85.7795 85.2461 85.8607 85.0578C85.9419 84.8695 85.9851 84.6671 85.988 84.462V82.626C86.024 82.072 86.098 79.312 84.278 76.258C83.13 74.332 81.464 72.67 79.326 71.314C76.74 69.674 73.45 68.488 69.47 67.774C67.4497 67.4897 65.4456 67.0998 63.466 66.606C58.202 65.262 57.742 64.072 57.738 64.06C57.7076 63.9425 57.6633 63.829 57.606 63.722C57.562 63.502 57.456 62.666 57.66 60.428C58.176 54.742 61.226 51.382 63.676 48.682C64.448 47.832 65.178 47.026 65.74 46.238C68.166 42.838 68.39 38.968 68.4 38.728C68.4092 38.3028 68.3504 37.8788 68.226 37.472C67.986 36.732 67.54 36.272 67.212 35.932C67.1344 35.8542 67.059 35.7742 66.986 35.692C66.962 35.664 66.898 35.588 66.956 35.206C67.1521 33.9754 67.2876 32.7359 67.362 31.492C67.474 29.488 67.56 26.492 67.042 23.574C66.966 23.0167 66.851 22.4653 66.698 21.924C66.152 19.916 65.276 18.2 64.058 16.784C63.848 16.554 58.752 11.184 43.958 10.084C41.912 9.93202 39.89 10.014 37.898 10.116C37.3089 10.1291 36.7226 10.2015 36.148 10.332C34.62 10.726 34.212 11.694 34.106 12.236C33.928 13.136 34.24 13.832 34.446 14.296C34.476 14.362 34.514 14.444 34.448 14.66C34.106 15.192 33.564 15.672 33.014 16.126C32.854 16.26 29.146 19.46 28.942 23.638C28.392 26.816 28.432 31.766 29.082 35.188C29.122 35.378 29.176 35.658 29.086 35.848C28.386 36.474 27.594 37.184 27.596 38.804C27.604 38.968 27.83 42.836 30.256 46.238C30.816 47.026 31.546 47.83 32.316 48.68L32.32 48.682C34.77 51.382 37.82 54.742 38.336 60.426C38.538 62.666 38.432 63.5 38.39 63.722C38.332 63.8289 38.287 63.9424 38.256 64.06C38.254 64.072 37.796 65.258 32.556 66.6C29.532 67.374 26.556 67.77 26.466 67.78C22.598 68.434 19.328 69.592 16.746 71.222C14.616 72.568 12.946 74.236 11.786 76.176C9.93002 79.276 9.98002 82.1 10.006 82.616V84.462H10.008Z"
                stroke="#85B6FF"
                strokeWidth="4"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <p className="text-center text-gray-800">{username}</p>
        <p className="text-center text-sm text-gray-600">
          Bergabung sejak {joinDate}
        </p>
        <div className="flex justify-center space-x-4 my-6">
          <button className="py-2 px-4 bg-primary rounded-md">
            <p className="text-sm text-white">Lihat Profil</p>
          </button>
          <button className="py-2 px-4 border-light border-2 rounded-md">
            <p className="text-sm text-primary">Edit Profil</p>
          </button>
        </div>
        <h1 className="text-base font-bold text-gray-800">Toko</h1>

        <div className="grid grid-cols-2 mt-4 gap-4">
          <div className="bg-light p-4 h-32 rounded-lg">
            <h1 className="text-sm text-primary font-bold">Toko Daging Lontar</h1>
            <div className="flex justify-end mt-4">
              <button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_322)">
                    <path
                      d="M0 21C0 21.7956 0.316071 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H21C21.7956 24 22.5587 23.6839 23.1213 23.1213C23.6839 22.5587 24 21.7956 24 21V3C24 2.20435 23.6839 1.44129 23.1213 0.87868C22.5587 0.316071 21.7956 0 21 0L3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3L0 21ZM6.75 11.25H15.4395L12.219 8.031C12.0782 7.89017 11.9991 7.69916 11.9991 7.5C11.9991 7.30084 12.0782 7.10983 12.219 6.969C12.3598 6.82817 12.5508 6.74905 12.75 6.74905C12.9492 6.74905 13.1402 6.82817 13.281 6.969L17.781 11.469C17.8508 11.5387 17.9063 11.6214 17.9441 11.7125C17.9819 11.8037 18.0013 11.9013 18.0013 12C18.0013 12.0987 17.9819 12.1963 17.9441 12.2874C17.9063 12.3786 17.8508 12.4613 17.781 12.531L13.281 17.031C13.1402 17.1718 12.9492 17.2509 12.75 17.2509C12.5508 17.2509 12.3598 17.1718 12.219 17.031C12.0782 16.8902 11.9991 16.6992 11.9991 16.5C11.9991 16.3008 12.0782 16.1098 12.219 15.969L15.4395 12.75H6.75C6.55109 12.75 6.36032 12.671 6.21967 12.5303C6.07902 12.3897 6 12.1989 6 12C6 11.8011 6.07902 11.6103 6.21967 11.4697C6.36032 11.329 6.55109 11.25 6.75 11.25Z"
                      fill="#52459F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_322">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
          <div className="bg-slight p-4 h-32 rounded-lg">
            <h1 className="text-sm text-gray-800 font-bold text-secondary">
              Ombens Minuman
            </h1>
            <div className="flex justify-end mt-4">
              <button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_328)">
                    <path
                      d="M0 21C0 21.7956 0.316071 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H21C21.7956 24 22.5587 23.6839 23.1213 23.1213C23.6839 22.5587 24 21.7956 24 21V3C24 2.20435 23.6839 1.44129 23.1213 0.87868C22.5587 0.316071 21.7956 0 21 0L3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3L0 21ZM6.75 11.25H15.4395L12.219 8.031C12.0782 7.89017 11.9991 7.69916 11.9991 7.5C11.9991 7.30084 12.0782 7.10983 12.219 6.969C12.3598 6.82817 12.5508 6.74905 12.75 6.74905C12.9492 6.74905 13.1402 6.82817 13.281 6.969L17.781 11.469C17.8508 11.5387 17.9063 11.6214 17.9441 11.7125C17.9819 11.8037 18.0013 11.9013 18.0013 12C18.0013 12.0987 17.9819 12.1963 17.9441 12.2874C17.9063 12.3786 17.8508 12.4613 17.781 12.531L13.281 17.031C13.1402 17.1718 12.9492 17.2509 12.75 17.2509C12.5508 17.2509 12.3598 17.1718 12.219 17.031C12.0782 16.8902 11.9991 16.6992 11.9991 16.5C11.9991 16.3008 12.0782 16.1098 12.219 15.969L15.4395 12.75H6.75C6.55109 12.75 6.36032 12.671 6.21967 12.5303C6.07902 12.3897 6 12.1989 6 12C6 11.8011 6.07902 11.6103 6.21967 11.4697C6.36032 11.329 6.55109 11.25 6.75 11.25Z"
                      fill="#FA896B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_328">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
          <div className="border-4 border-light border-dotted p-4 h-32 rounded-lg">
            <div className="flex justify-center">
              <button>
                <p className="font-black text-5xl text-light text-center">+</p>
              </button>
            </div>
            <p className="font-bold text-light text-md text-center">
              Tambah Toko
            </p>
          </div>
          <div className="border-4 border-slight border-dotted p-4 h-32 rounded-lg">
            <div className="flex justify-center">
              <button>
                <p className="font-black text-5xl text-slight text-center">+</p>
              </button>
            </div>
            <p className="font-bold text-slight text-md text-center">
              Tambah Toko
            </p>
          </div>
        </div>
        <p className="mt-12 text-xs text-gray-600 text-right">Copyright © 2022 Simontok </p>
      </div>
    </>
  );
};
