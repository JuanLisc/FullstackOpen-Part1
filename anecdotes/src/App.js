import { useState } from 'react'

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  let votesObj = {}
  for (let i = 0; i < anecdotes.length; i++) {
    votesObj[i] = 0;
  }
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({...votesObj})
  const [mostVoted, setMostVoted] = useState('No votes yet')

  const votePhrase = () => {
    const newVoteStatus = {
      ...votes,
      [selected]: votes[selected] + 1
    }

    let maxVotes = 0
    let phraseMostVoted = ''
    for (let phrase in newVoteStatus) {
      if (newVoteStatus[phrase] > maxVotes) {
        maxVotes = newVoteStatus[phrase]
        phraseMostVoted = anecdotes[phrase]
      }
    }
    
    setMostVoted(phraseMostVoted)
    setVotes(newVoteStatus)
  }

  const getRandomInt = () => {
    const randomInt = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomInt)
  }

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>
        <Display value={anecdotes[selected]} />
        <Display value={`This phrase has ${votes[selected]} votes.`} />
        <Button handleClick={votePhrase} text='Vote' />
        <Button handleClick={getRandomInt} text='Next Anecdote'/>
      </div>
      <h2>Anecdote with most votes</h2>
      <Display value={mostVoted} />
    </>
  )
}

export default App