import styles from "../../styles/Components.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { listings: data },
  }
}

import React from "react";

const Index = ({ listings }) => {
  return (
    <div>
      <h1>All Compoments</h1>
      {listings.map((list) => (
        <Link href={"/components/" + list.id} key={list.id}>
          <a className={styles.single}>
            <h3>{list.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Index;
