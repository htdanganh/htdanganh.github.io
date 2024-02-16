const YEAR = new Date().getFullYear();

export default {
  footer: (
    <footer>
      <hr />
      it's the little things in life
      <br />
      <a > LinkedIn</a>
      <a > Github</a>
      <a > Gmail</a>
      <small>
        <time>{YEAR}</time> © Anh Dang.
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
};
