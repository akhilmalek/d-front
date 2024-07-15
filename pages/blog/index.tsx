import Head from "next/head";
import { Accordion, Button, Image, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../Spinner";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../componants/card/card";
import ModalCard from "../componants/modal/modal";
import { Menu } from "../componants/menu/menu";

export default function Blog() {
  type user = {
    name: string;
    username: string;
    email: any;
    website: any;
    id: number;
    length: number;
  };

  const [show, setShow] = useState(false);
  const [modaldata, setShowdata] = useState<user>();
  const handleClose = () => setShow(false);

  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<user[]>([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  const handleOpenModal = (id: number) => {
    const getUserById = (userID: number) => {
      return users.find((user) => user.id === userID);
    };

    let found: any = getUserById(id);
    setShowdata(found);
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
    pauseOnHover: true,
  };


  const fetchData: any = () => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setTimeout(() => {
          setUsers(response.data);
          setIsLoading(false);
        }, 300);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // sorting
  const [sortKey, setSortKey] = useState("");

  const handleSortChange = (e: any) => {
    const selectedSortKey = e.target.value;

    if (selectedSortKey !== "") {
      setSortKey(selectedSortKey);

      const sortedItems = [...users].sort((a, b) => {
        if (selectedSortKey === "asc") {
          if (a.username < b.username) return -1;
          if (a.username > b.username) return 1;
          return a.id - b.id; // Sort by id if usernames are equal
        } else if (selectedSortKey === "desc") {
          if (a.username < b.username) return 1;
          if (a.username > b.username) return -1;
          return b.id - a.id; // Sort by id in descending order if usernames are equal
        } else if (selectedSortKey === "none") {
          if (a.id < b.id) return -1;
          if (a.id > b.id) return 1;
          return 0; // No sorting for id
        }
        return 0; // No sorting
      });

      setUsers(sortedItems);
    }
  };
  // sorting end

  // new modal
  const [showModal, setShowModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [showModalData, setShowModalData] = useState<user>();
  const handleOpenModalCard = (id: number) => {
    setSelectedUserId(id);
    setShowModal(true);
    const getUserById = (id: number) => {
      return users.find((user) => user.id === id);
    };

    let found: any = getUserById(id);
    setShowModalData(found);
  };

  const handleCloseModalCard = () => {
    setShowModal(false);
    setSelectedUserId(null);
  };

  // end new modal

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="agile-banner-section">
        <div className="agile-banner-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="agile-banner-content">
                  <div className="heading">
                    <h3></h3>
                    <h1 className="page-heading">Hello</h1>
                    <p>Lorem Ipsum!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="card-section">
        <div className="container">
          <div className="card-container">
            <div className="row gx-3">
              <div className="col-lg-3 col-md-4">
                <div className="card-left">
                  <h3>Categories</h3>
                    <Menu/>
                </div>
              </div>

              <div className="col-lg-9 col-md-8">
                <div>
                  <div className="row">
                    <div className="col-lg-8">
                      <input
                        placeholder="Enter Post Title"
                        className="form-control"
                        onChange={(event) => setQuery(event.target.value)}
                      />
                    </div>
                    <div className="col-lg-4">
                      <select
                        id="sortSelect"
                        className="form-select"
                        value={sortKey}
                        onChange={handleSortChange}
                      >
                        <option value="none">None</option>
                        <option value="asc">A - Z</option>
                        <option value="desc">Z - A</option>
                      </select>
                    </div>
                  </div>

                  <div className="card-right">
                    {isLoading ? (
                      <LoadingSpinner />
                    ) : (
                      <>
                        {users.length > 0 && (
                          <div className="row ">
                            {users
                              .filter((user: user) => {
                                if (query === "") {
                                  return user;
                                } else if (
                                  user.username
                                    .toLowerCase()
                                    .includes(query.toLowerCase())
                                ) {
                                  return user;
                                } else if (user.length > 0) {
                                  return <>No</>;
                                }
                              })
                              .map((user: user, index: number) => {
                                return (
                                  <div
                                    className="col-lg-4 col-md-6 col-sm-6 mb-4"
                                    key={index}
                                  >
                                    <Card
                                            name={user.username}
                                            email={user.email}
                                            website={user.website}
                                            number={user.id}
                                            onClick={() => handleOpenModalCard(user.id)} 
                                            className={undefined}                                    />
                                  </div>
                                );
                              })}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section className="card-section overflow-hidden">
        <div className="container">
        <div>
            <div>
              <h5> Single Item</h5>
            </div>
          </div>
          <div className="position-relative">
            <div className="process-slider">
              <Slider {...settings}>
                {users.map((user: user, index: number) => {
                  return (
                    <>
                      <Card
                        key={index}
                        className="cardnew"
                        name={user.username}
                        email={user.email}
                        website={user.website}
                        number={user.id}
                        onClick={() => ''}
                      />
                    </>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <ModalCard show={showModal} handleClose={handleCloseModalCard}>
        <p>
          <strong>Name : </strong>
          {showModalData?.id}
        </p>
        <p>
          <strong>Email : </strong>
          {showModalData?.email}
        </p>
        <p>
          <strong>Website : </strong>
          {showModalData?.website}
        </p>
      </ModalCard>
    </>
  );
}
