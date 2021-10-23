import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <span>
          <Image src="/images/logo.svg" alt="ig.news" width={110} height={31} />
        </span>
        <nav>
          <Link href="/" passHref>
            <a className={styles.active}>Home</a>
          </Link>
          <Link href="/posts" passHref>
            <a>Posts</a>
          </Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
