import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import skills from '@/data/skills';
const Skills = () => {
  const { frontSkills, backendSkills, Database, other } = skills
  return (
    <Row>
      <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={12} className='py-3'>
        <div className='text-center my-4'>In Font-End</div>
        <div className='skills'>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {
              frontSkills?.map((item) => {
                return <SwiperSlide style={{ background: item?.bg }}>
                  <div className='skills-info'>
                    <div className='skills-icon'>
                      <Image src={item?.icon} width={100} height={100} />
                    </div>
                    <div className='skills-title'>{item.title}</div>
                  </div>
                </SwiperSlide>
              })
            }
          </Swiper>
        </div>
      </Col>

      <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={12} className='py-3'>
        <div className='text-center my-4 font-large'>In Back-End </div>
        <div className='skills'>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {
              backendSkills?.map((item) => {
                return <SwiperSlide style={{ background: item?.bg }}>
                  <div className='skills-info'>
                    <div className='skills-icon'>
                      <Image src={item?.icon} width={100} height={100} />
                    </div>
                    <div className='skills-title'>{item.title}</div>
                  </div>
                </SwiperSlide>
              })
            }
          </Swiper>
        </div>
      </Col>


      <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={12} className='py-3'>
        <div className='text-center my-4 font-large'>In Database</div>
        <div className='skills'>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {
              Database?.map((item) => {
                return <SwiperSlide style={{ background: item?.bg }}>
                  <div className='skills-info'>
                    <div className='skills-icon'>
                      <Image src={item?.icon} width={100} height={100} />
                    </div>
                    <div className='skills-title'>{item.title}</div>
                  </div>
                </SwiperSlide>
              })
            }
          </Swiper>
        </div>
      </Col>


      <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={12} className='py-3'>
        <div className='text-center my-4 font-large'>Other Skills</div>
        <div className='skills'>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {
              other?.map((item) => {
                return <SwiperSlide style={{ background: item?.bg }}>
                  <div className='skills-info'>
                    <div className='skills-icon'>
                      <Image src={item?.icon} width={100} height={100} />
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
  )
}

export default Skills
