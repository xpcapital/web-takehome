import UserInterface from "types/users";

const generateUsers = () => {
  const users: UserInterface[] = [
    {
      id: 'user_1',
      profilePicture: 'https://media.graphcms.com/CM4PT4FQKudqg2ehLnRE',
      name: 'World’s Best Boss'
    },
    {
      id: 'user_2',
      profilePicture: 'https://media.graphcms.com/saCwTTRm6ih7iwc983Zg',
      name: 'N°067'
    },
    {
      id: 'user_3',
      profilePicture: 'https://media.graphcms.com/A0tGTm32TATyccrSIR1T',
      name: 'Richie'
    },
    {
      id: 'user_4',
      profilePicture: 'https://media.graphcms.com/JuDjHrPS2uFIwju1m8ji',
      name: 'Teal\'c'
    },
    {
      id: 'user_5',
      profilePicture: 'https://media.graphcms.com/zWChzauzTAClXjiQ5Oc8',
      name: 'Miranda'
    },
    {
      id: 'user_6',
      profilePicture: 'https://media.graphcms.com/zDKzfeZT7mogJjMIegZZ',
      name: 'Forrest Gump'
    },
    {
      id: 'user_7',
      profilePicture: 'https://media.graphcms.com/7bpTiMAkRACxFlcMYa4d',
      name: 'Abed'
    },
  ];

  return users;
}

export default generateUsers;