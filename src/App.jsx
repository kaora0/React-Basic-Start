import { Fragment, useState } from 'react'
import Header from './components/Header/Header'
import IntroSection from './components/IntroSection'
import TeachingSection from './components/TeachingSection'
import ButtonSection from './components/ButtonSection'
import TabsSection from './components/TabsSection'
import FeedbackSection from './components/FeedbackSection'


// КОМПОНЕНТ прим.1:
export default function App() {
  const [tab, setTab] = useState('feedback')

  console.log('App Component Render')

  return (
    // это НЕ теги, это функции, заложенные в реакт
    <Fragment>
       <Header/> {/* вставили компонент */}
      <main>
        <IntroSection/>
        <TabsSection active={tab} onChange={(current) => setTab(current)}/>

        {tab == 'main' && (
          <>
            <TeachingSection/>
            <ButtonSection/>
          </>
        )}

        {tab == 'feedback' &&
          <>
            <FeedbackSection/>
          </>
        }
      </main>
    </Fragment>
  )
}
