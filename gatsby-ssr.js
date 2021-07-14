import React from "react"
import Layout from "./src/components/Layout"

// Wraps every page in a component
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}