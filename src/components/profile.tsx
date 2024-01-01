import Image from 'next/image';

export default function Profile() {
  return (
    <div className='bg-white w-full rounded-2xl shadow'>
      <div className='flex justify-center items-center aspect-w-1 aspect-h-1 bg-orange-200 rounded-tl-2xl rounded-tr-2xl'>
        <Image
          className='w-full h-full object-contain'
          src='/profile.png'
          alt=''
          width={200}
          height={37}
          unoptimized={true}
        />
      </div>
      <div className='px-4 py-3 flex flex-col space-y-1 text-center text-zinc-800 text-lg font-bold'>
        <div>타이가</div>

        <div className='flex flex-row font-medium text-xs text-gray-400 justify-center space-x-1'>
          <span className='text-gray-800 font-bold'>Twitter </span>
          <a href='https://twitter.com/DevvTyga'>@DevvTyga</a>
        </div>
        <div className='flex flex-row font-medium text-xs text-gray-400 justify-center space-x-1'>
          <span className='text-gray-800 font-bold'>GitHub </span>
          <div className='flex flex-row space-x-3'>
            <a href='https://github.com/DevvTyga'>@DevvTyga</a>
            <a href='https://github.com/keepwa1king'>@keepwa1king (본캐)</a>
          </div>
        </div>
        <div className='flex flex-row font-medium text-xs text-gray-400 justify-center space-x-1'>
          <span className='text-gray-800 font-bold'>Resume </span>
          <a href='https://career.programmers.co.kr/resumes/780610'>
            이력서
          </a>
        </div>
      </div>
    </div>
  );
}
