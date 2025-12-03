import userGet from '@/actions/user-get'
import React from 'react'

export default async function AccountInfo() {
    const idUser = await userGet()

    return (
        <div><p>{idUser?.name}</p></div>
    )
}