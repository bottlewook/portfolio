import Image from 'next/image';

import Spacing from '../spacing/Spacing';

interface ISkill {
  path: string
  name: string
}

function Skill({ path, name }: ISkill) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '80px', textAlign: 'center',
    }}
    >
      <Image src={path} alt={name} width={40} height={40} />
      <Spacing size={8} />
      <p style={{
        fontSize: '12px', fontWeight: 300,
      }}
      >
        {name}
      </p>
    </div>
  );
}

export default Skill;
