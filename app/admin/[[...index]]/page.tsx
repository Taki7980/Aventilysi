"use client";


import config from '@/sanity.config'
import React from 'react'
import { NextStudio } from "next-sanity/studio";

const AdminPage = () => {
      return (
            <NextStudio config={config} />
      )
}

export default AdminPage