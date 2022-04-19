import moment from 'moment';
import MessageInterface from 'types/messages';

const generateMessages = () => {
  const uarticle = new Array("The", "A", "One", "Some", "Any");
  const noun = new Array("boy", "girl", "dog", "town", "car");
  const verb = new Array("drove", "jumped", "ran", "walked", "skipped");
  const larticle = new Array("the", "a", "one", "some", "any");
  const preposition = new Array("to", "from", "over", "under", "on");

  const messages: MessageInterface[] = [
    {
      id: 'message_109',
      chatId: 'chat_1',
      writtenByMe: false,
      content: 'Dwight started a fire yesterday..',
      date: moment().subtract(9, 'minute').toString(),
    },
    {
      id: 'message_102',
      chatId: 'chat_1',
      writtenByMe: false,
      content: 'He said it was an emergency test and we all failed',
      date: moment().subtract(8, 'minute').toString(),
    },
    {
      id: 'message_103',
      chatId: 'chat_1',
      writtenByMe: false,
      content: 'He’s an idiot',
      date: moment().subtract(7, 'minute').toString(),
    },
    {
      id: 'message_104',
      chatId: 'chat_1',
      writtenByMe: true,
      content: 'And the song keeps going: 🎶 Ryannn started a fiireee 🎶\nYou should fire him',
      date: moment().subtract(6, 'minute').toString(),
    },
    {
      id: 'message_105',
      chatId: 'chat_1',
      writtenByMe: false,
      content: 'Nahh',
      date: moment().subtract(5, 'minute').toString(),
    },
    {
      id: 'message_106',
      chatId: 'chat_1',
      writtenByMe: true,
      content: 'Why?',
      date: moment().subtract(4, 'minute').toString(),
    },
    {
      id: 'message_107',
      chatId: 'chat_1',
      writtenByMe: false,
      content: 'He’s a good salesman',
      date: moment().subtract(3, 'minute').toString(),
    },
    {
      id: 'message_108',
      chatId: 'chat_1',
      writtenByMe: true,
      content: 'Yeah, he is so dedicated…',
      date: moment().subtract(2, 'minute').toString(),
    },
    {
      id: 'message_101',
      chatId: 'chat_1',
      writtenByMe: false,
      content: 'That’s what she said 😊',
      date: moment().subtract(1, 'minute').toString(),
    },
    {
      id: 'message_201',
      chatId: 'chat_2',
      writtenByMe: false,
      content: 'Gettin’ invited to a game show! Dunno what it is about rn',
      date: moment().subtract(4, 'hour').toString(),
    },
    {
      id: 'message_301',
      chatId: 'chat_3',
      writtenByMe: true,
      content: 'You can’t love her..',
      date: moment().subtract(16, 'hour').toString(),
    },
    {
      id: 'message_401',
      chatId: 'chat_4',
      writtenByMe: false,
      content: 'I have another great joke!',
      date: moment().subtract(16, 'hour').toString(),
    },
    {
      id: 'message_501',
      chatId: 'chat_5',
      writtenByMe: false,
      content: 'Prada file, 10min, my desk',
      date: moment().subtract(1, 'day').toString(),
    },
    {
      id: 'message_601',
      chatId: 'chat_6',
      writtenByMe: true,
      content: 'Run, Forrest! Run!',
      date: moment().subtract(2, 'week').toString(),
    },
    {
      id: 'message_701',
      chatId: 'chat_7',
      writtenByMe: false,
      content: 'And a movie?????',
      date: moment().subtract(8, 'year').toString(),
    },
  ];

  for (let i = 2; i <= 7; i++) {
    const messagesCount = Math.floor(Math.random() * 40);

    for (let im = 2; im < messagesCount; im++) {
      var rand1 = Math.floor(Math.random() * uarticle.length);
      var rand2 = Math.floor(Math.random() * noun.length);
      var rand3 = Math.floor(Math.random() * verb.length);
      var rand4 = Math.floor(Math.random() * preposition.length);
      var rand5 = Math.floor(Math.random() * larticle.length);

      const sentence = uarticle[rand1] + " " + noun[rand2] + " " + verb[rand3] + " " + preposition[rand4] + " " + larticle[rand4] + " " + noun[rand5] + ".";

      messages.push({
        id: `message_${i}0${im}`,
        chatId: `chat_${i}`,
        writtenByMe: Math.random() > 0.5,
        content: sentence,
        date: moment().subtract(10, 'year').toString(),
      })
    }
  }

  return messages;
}

export default generateMessages;