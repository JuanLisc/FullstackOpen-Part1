import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = props => {
  return (
    <>
      <>{props.text}</>
      <>{props.value}</>
    </>
  )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / total
  const positive = (props.good / total) * 100
  
  if (total === 0) return <div>No feedback given</div>

  return (
    <table>
      <tbody>
        <tr>
          <td><StatisticLine text='Good' /></td>
          <td><StatisticLine value={props.good} /></td>
        </tr>
        <tr>
          <td><StatisticLine text='Neutral' /></td>
          <td><StatisticLine value={props.neutral} /></td>
        </tr>
        <tr>
          <td><StatisticLine text='Bad' /></td>
          <td><StatisticLine value={props.bad} /></td>
        </tr>
        <tr>
          <td><StatisticLine text='Total' /></td>
          <td><StatisticLine value={total} /></td>
        </tr>
        <tr>
          <td><StatisticLine text='Average' /></td>
          <td><StatisticLine value={average} /></td>
        </tr>
        <tr>
          <td><StatisticLine text='Positive' /></td>
          <td><StatisticLine value={positive + '%'} /></td>
        </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={() => setGood(good + 1)} text='Good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='Bad' />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App