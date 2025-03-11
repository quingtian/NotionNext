import { useEffect, useState } from 'react';
import { BeiAnGongAn } from '@/components/BeiAnGongAn';
import BeiAnSite from '@/components/BeiAnSite';
import PoweredBy from '@/components/PoweredBy';
import { siteConfig } from '@/lib/config';

const Footer = ({ title }) => {
  const d = new Date();
  const currentYear = d.getFullYear();
  const since = siteConfig('SINCE');
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear;

  const [runtime, setRuntime] = useState('');

  useEffect(() => {
    function show_runtime() {
      const X = new Date("2024-06-21 00:00:00");
      const Y = new Date();
      const T = (Y.getTime() - X.getTime());
      const M = 24 * 60 * 60 * 1000;
      const a = T / M;
      const A = Math.floor(a);
      const b = (a - A) * 24;
      const B = Math.floor(b);
      const c = (b - B) * 60;
      const C = Math.floor(c);
      const D = Math.floor((c - C) * 60);
      setRuntime(`网站在各种灾难中运行了: ${A}天${B}小时${C}分${D}秒`);
    }
    const interval = setInterval(show_runtime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className='relative z-10 dark:bg-black flex-shrink-0 bg-hexo-light-gray justify-center text-center m-auto w-full leading-6 text-gray-600 dark:text-gray-100 text-sm p-6'>
      {/* <DarkModeButton/> */}
      <i className='fas fa-copyright' /> {`${copyrightDate}`}
      <span>
        <i className='mx-1 animate-pulse fas fa-heart' />
        <a
          href={siteConfig('LINK')}
          className='underline font-bold dark:text-gray-300'>
          {siteConfig('AUTHOR')}
        </a>
        .<br />
        <BeiAnSite />
        <BeiAnGongAn />
        <span className='hidden busuanzi_container_site_pv'>
          <i className='fas fa-eye' />
          <span className='px-1 busuanzi_value_site_pv'> </span>
        </span>
        <span className='pl-2 hidden busuanzi_container_site_uv'>
          <i className='fas fa-users' />
          <span className='px-1 busuanzi_value_site_uv'> </span>
        </span>
        <h1 className='text-xs pt-4 text-light-400 dark:text-gray-400'>
          {title} {siteConfig('BIO') && <>|</>} {siteConfig('BIO')}
        </h1>
        <PoweredBy className='justify-center' />
      </span>
      <br />
      <div id="wrapper" className="relative z-10">
        <span id="runtime_span" style={{ color: 'F2EFE7' }}>{runtime}</span>
      </div>
    </footer>
  );
};

export default Footer;
