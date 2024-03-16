import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import skills from '@/data/skills';
import Heading from '@/components/common/heading';
const Skills = () => {
  const { frontSkills, backendSkills, Database, other } = skills
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={12}>
          <Heading title={'Development Skills'} />
          <p className='text-center desc-text' data-aos="zoom-in">
            Proficiency in various programming languages, frameworks, and tools, coupled with a proven track record of delivering high-quality software solutions.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={12} className='py-3' data-aos="fade-up" data-aos-delay="100">
          <div className='text-center my-4 skills-heading' data-aos="fade-up" data-aos-delay="100">In Font-End</div>
          <div className='skills'>
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {
                frontSkills?.map((item, keys) => {
                  return <SwiperSlide style={{ background: item?.bg }} key={keys}>
                    <div className='skills-info'>
                      <div className='skills-icon'>
                        <Image src={item?.icon} aria-label="Mukesh singh" alt="kabawat" aria-labelledby="kabawat" width={100} height={100} />
                      </div>
                      <div className='skills-title'>{item.title}</div>
                    </div>
                  </SwiperSlide>
                })
              }
            </Swiper>
          </div>
        </Col>

        <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={12} className='py-3' data-aos="fade-up" data-aos-delay="200">
          <div className='text-center my-4 font-large skills-heading' data-aos="fade-up" data-aos-delay="100">In Back-End </div>
          <div className='skills'>
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {
                backendSkills?.map((item, keys) => {
                  return <SwiperSlide style={{ background: item?.bg }} key={keys}>
                    <div className='skills-info'>
                      <div className='skills-icon'>
                        <Image src={item?.icon} aria-label="Mukesh singh" alt="kabawat" aria-labelledby="kabawat" width={100} height={100} />
                      </div>
                      <div className='skills-title'>{item.title}</div>
                    </div>
                  </SwiperSlide>
                })
              }
            </Swiper>
          </div>
        </Col>


        <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={12} className='py-3' data-aos="fade-up" data-aos-delay="300">
          <div className='text-center my-4 font-large skills-heading' data-aos="fade-up" data-aos-delay="100">In Database</div>
          <div className='skills'>
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {
                Database?.map((item, keys) => {
                  return <SwiperSlide style={{ background: item?.bg }} key={keys}>
                    <div className='skills-info'>
                      <div className='skills-icon'>
                        <Image src={item?.icon} aria-label="Mukesh singh" alt="kabawat" aria-labelledby="kabawat" width={100} height={100} />
                      </div>
                      <div className='skills-title'>{item.title}</div>
                    </div>
                  </SwiperSlide>
                })
              }
            </Swiper>
          </div>
        </Col>


        <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={12} className='py-3' data-aos="fade-up" data-aos-delay="400">
          <div className='text-center my-4 font-large skills-heading' data-aos="fade-up" data-aos-delay="100">Other Skills</div>
          <div className='skills'>
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {
                other?.map((item, keys) => {
                  return <SwiperSlide style={{ background: item?.bg }} key={keys}>
                    <div className='skills-info'>
                      <div className='skills-icon'>
                        <Image src={item?.icon} aria-label="Mukesh singh" alt="kabawat" aria-labelledby="kabawat" width={100} height={100} />
                      </div>
                      <div className='skills-title'>{item.title}</div>
                    </div>
                  </SwiperSlide>
                })
              }
            </Swiper>
          </div>
        </Col>

      </Row>
    </Container>
  )
}

export default Skills
