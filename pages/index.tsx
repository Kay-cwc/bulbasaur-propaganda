import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div>
          {
            Array.from(Array(400).keys()).map((i) => {
               return <div key={i} style={{height: 200}}>
                 <div style={{display: 'inline-flex', height: 200, width: 200, position: 'relative'}}> 
                <Image fill style={{objectFit: 'contain'}} src={`https://raw.githubusercontent.com/Aegide/custom-fusion-sprites/main/CustomBattlers/1.${i}.png`} alt={`original-1-${i}`} />

                 </div>
                 <div style={{display: 'inline-flex', height: 200, width: 200, position: 'relative'}}> 
               <Image fill src={`https://raw.githubusercontent.com/Aegide/autogen-fusion-sprites/master/Battlers/1/1.${i}.png`} alt={`custom-1-${i}`} />
                </div>
                <div style={{display: 'inline-flex', height: 200, width: 200, position: 'relative'}}> 
               <Image fill src={`https://raw.githubusercontent.com/Aegide/custom-fusion-sprites/main/CustomBattlers/${i}.1.png`} alt={`original-${i}-1`} />
                </div>
                <div style={{display: 'inline-flex', height: 200, width: 200, position: 'relative'}}> 
               <Image fill src={`https://raw.githubusercontent.com/Aegide/autogen-fusion-sprites/master/Battlers/${i}/${i}.1.png`} alt={`custom-${i}-1`} />
                </div>

               </div>
            })
          }
          {/* {
            Array.from(Array(400).keys()).map((i) => {
              return <img src={`https://raw.githubusercontent.com/Aegide/custom-fusion-sprites/main/CustomBattlers/${i}.${i}.png`} />
            })
          } */}

        </div>
      </main>
    </>
  )
}
