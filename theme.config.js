const YEAR = new Date().getFullYear();

export default {
  footer: (
    <footer>
      <a href="mailto:anhhtdang@gmail.com">
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="27px" viewBox="0 0 24 24">
          <path d="M12.69 12.06a1 1 0 0 1-1.34 0L2.87 4.35A2 2 0 0 1 4 4h16a2 2 0 0 1 1.13.35Z" fill="#000000" class="fill-464646"></path><path d="M22 6.26V17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6.26l8.68 7.92a2 2 0 0 0 1.32.49 2 2 0 0 0 1.33-.51Z" fill="#000000" class="fill-464646"></path>
        </svg>
      </a>

      <a href="https://linkedin.com/in/htdanganh" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 48 48" ><g>
          <rect fill="#241F20" height="31.613" width="9.761" x="0.525" y="16.264"/><path d="M47.778,29.252c-0.321-7.842-3.532-13.723-11.161-14.062c-8.061-0.357-10.569,5.194-10.569,5.194v-4.12   h-9.762v31.613h9.762V29.252c0,0,0.269-4.211,4.231-5.487c3.963-1.276,7.771,1.679,7.771,6.179v17.934h9.761V29.252H47.778z" fill="#241F20"/><circle cx="5.405" cy="5.339" fill="#241F20" r="5.216"/></g>
        </svg>
    
      </a>

      <a href="https://github.com/htdanganh" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
      </a>
      

      <small>
        it's the little things in life
        <br />
        <time>{YEAR}</time> © Anh Dang.
      </small>

      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
          margin-left: 1rem;
        }
      `}</style>

    </footer>
  ),
};
