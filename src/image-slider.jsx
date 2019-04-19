import React from "react";

export default class ImageSlider extends React.Component {
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
            if (this.props.children.length - 1 === this.state.selected) {
                this.setState({ selected: 0 });
            } else {
                this.setState({ selected: this.state.selected + 1 });
            }
        }, 3000);
    }

    componentDidMount() {
        this._autoSlide();
    }

    componentWillUnmount() {
        clearInterval(this.fuse);
    }

    render() {
        console.log(this.props.children);
        return (
            <div className="slideHolder">
                {this.props.children.map((e, i) => {
                    return (
                        <div key={i} style={{ transform: `translateX(${this.state.selected * -1600}px)` }}>{e}</div>
                    )
                })}
                <div className="circleBox">
                    {this.props.children.map((e, i) => {
                        return <span key={i} className={i === this.state.selected ? "selected" : null} onClick={() => this.handleCircleClick(i)}></span>
                    })}
                </div>
            </div>
        )
    }
}