import React from "react";

export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        }
        this.handleCircleClick = this.handleCircleClick.bind(this);
    }

    handleCircleClick(i) {
        clearInterval(this.fuse);

        this.setState({ selected: i });
        this._autoSlide();
    }

    _autoSlide() {
        this.fuse = setInterval(() => {
            if (this.props.srcs.length - 1 === this.state.selected) {
                this.setState({ selected: 0 });
            } else {
                this.setState({ selected: this.state.selected + 1 });
            }

        }, 3000);
    }

    componentDidMount() {
        this._autoSlide();
    }

    render() {
        return (
            <div className="slideHolder">
                {this.props.srcs.map((e, i) => {
                    return <img src={e} alt="" key={i} style={{ transform: `translateX(${this.state.selected * -1600}px)` }} />
                })}
                <div className="circleBox">
                    {this.props.srcs.map((e, i) => {
                        return <span className={i === this.state.selected ? "selected" : null} onClick={() => this.handleCircleClick(i)}></span>
                    })}
                </div>

            </div>
        )
    }
}