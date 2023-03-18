import Button from "../common/button.components";
import Searchbox from "../common/searchbox.components";
import Logo from "../common/logo.components";

function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Logo />
                <div className="collapse navbar-collapse" id="navbarNav">
                    <form
                        onSubmit={(e) => {
                            props.handleSearch(e);
                        }}
                        className="d-flex ms-auto"
                    >
                        <Searchbox searchedValue={props.searchedValue} />
                        <Button handleSearch={props.handleSearch} />
                    </form>
                    <div className="d-flex ms-auto">
                        <div>Md Abu Noman</div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Nav;
