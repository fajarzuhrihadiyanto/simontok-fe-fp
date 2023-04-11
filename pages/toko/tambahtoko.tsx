import { LeftSidebar } from "../../components/LeftSidebar";
import { PageContent } from "../../components/PageContent";
import { PageContainer } from "../../components/Container";
import React from "react";
import { useRouter } from "next/router";
import { BACKEND_URL } from "../../config";

export default function AddShop() {

  const [name, setName] = React.useState('')
  const router = useRouter()

  const onSubmit = (e: any) => {
    e.preventDefault()

    const token = localStorage.getItem('token')

    const data = JSON.stringify({
      name
    })

    fetch(`${BACKEND_URL}/api/create_shop`, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        if (data.success) {
          router.push('/toko')
        } else {
          throw Error('not success')
        }
      })
      .catch(e => {
        console.error(e)
      })
  }

  React.useEffect(() => {
    const token = localStorage && localStorage.getItem('token')
    if (!token) {
      router.push('/login')
    }
  }, [])

  return (
    <>
      <LeftSidebar />
      <PageContent>
        <h1 className="text-lg font-bold w-full">Toko</h1>
        <h2 className="mt-4 font-bold">Tambah Toko</h2>
        <PageContainer>
          <form className="flex space-x-16">
            <div className="w-full">
              <h1 className="text-base font-bold mb-4">Informasi Toko</h1>
              <div className="mb-3">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-800 dark:text-white"
                >
                  Nama Toko
                </label>
                <input
                  type="text"
                  id="base-input"
                  className="bg-light border border-white text-gray-800 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  value={name}
                  onChange={(e) => {setName(e.target.value)}}
                ></input>
              </div>

              <button className="bg-primary w-full p-2.5 text-center rounded-lg text-white mt-4 hover:bg-forhoverprimary" onClick={onSubmit}>
                Tambahkan Toko
              </button>
            </div>
          </form>
        </PageContainer>
      </PageContent>
    </>
  );
}
