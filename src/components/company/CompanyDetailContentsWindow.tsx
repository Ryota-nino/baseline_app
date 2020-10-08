import React from 'react';
import {Link} from 'react-router-dom';
import { AnimatePresence,motion } from 'framer-motion';

interface Props {
    thisPage: string;
}

const CompanyDetailContentsWindow:React.FC<Props> = props => {
    const pageTransition = {
        in: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.2
          }
        },
        out: {
          x: -20,
          opacity: 0,
        },
      };

    const renderTabMenuList = () => {
        return (
            <div className="companyContentsWindow__list">
                <ul>
                    <li className={props.thisPage === 'step' ? 'current' : ''}><Link to="/company-detail/contents/:id/step">選考ステップ</Link></li>
                    <li className={props.thisPage === 'entry' ? 'current' : ''}><Link to="/company-detail/contents/:id/entry">エントリーシート</Link></li>
                    <li className={props.thisPage === 'interview' ? 'current' : ''}><Link to="/company-detail/contents/:id/interview">面接情報</Link></li>
                </ul>
            </div>
        );
    };
    const renderContents = () => {
        if(props.thisPage === 'step') {
            return (
                <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
                    <p className="companyContentsWindow__update">2020.09.18更新</p>         
                    <div className="aboutCompany-item">
                        <div className="aboutCompany-item__left-col">
                            <h2 className="heading5">本選考 (22卒)</h2>
                            <p className="aboutCompany-item__job">エンジニア応募</p>　　
                        </div>
                        <div className="aboutCompany-item__right-col">
                            <ol className="step-list">
                                <li className="step-item">
                                    <p className="step-item__time">12月</p>
                                    <div className="step-item__circle"></div>
                                    <div className="step-item__wrap">
                                        <p className="step-item__ttl">エントリーシート</p>
                                        <p className="step-item__txt"></p>
                                    </div>
                                </li>
                                <li className="step-item">
                                    <p className="step-item__time">12月</p>
                                    <div className="step-item__circle"></div>
                                    <div className="step-item__wrap">
                                        <p className="step-item__ttl">WEBテスト</p>
                                        <p className="step-item__txt">内容は普通のSPIでした。やるべきことは参考書を購入して１冊やればそれで十分なレベルだと思います。</p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="aboutCompany-item">
                        <div className="aboutCompany-item__left-col">
                            <h2 className="heading5">サマーインターンシップ(22卒)</h2>
                            <p className="aboutCompany-item__job">エンジニア応募</p>　　
                        </div>
                        <div className="aboutCompany-item__right-col">
                            <ol className="step-list">
                                <li className="step-item">
                                    <p className="step-item__time">12月</p>
                                    <div className="step-item__circle"></div>
                                    <div className="step-item__wrap">
                                        <p className="step-item__ttl">エントリーシート</p>
                                        <p className="step-item__txt"></p>
                                    </div>
                                </li>
                                <li className="step-item">
                                    <p className="step-item__time">12月</p>
                                    <div className="step-item__circle"></div>
                                    <div className="step-item__wrap">
                                        <p className="step-item__ttl">WEBテスト</p>
                                        <p className="step-item__txt">内容は普通のSPIでした。やるべきことは参考書を購入して１冊やればそれで十分なレベルだと思います。</p>
                                    </div>
                                </li>
                                <li className="step-item">
                                    <p className="step-item__time">12月</p>
                                    <div className="step-item__circle"></div>
                                    <div className="step-item__wrap">
                                        <p className="step-item__ttl">WEBテスト</p>
                                        <p className="step-item__txt">内容は普通のSPIでした。やるべきことは参考書を購入して１冊やればそれで十分なレベルだと思います。</p>内容は普通のSPIでした。やるべきことは参考書を購入して１冊やればそれで十分なレベルだと思います。
                                    </div>
                                </li>
                                <li className="step-item">
                                    <p className="step-item__time">12月</p>
                                    <div className="step-item__circle"></div>
                                    <div className="step-item__wrap">
                                        <p className="step-item__ttl">WEBテスト</p>
                                        <p className="step-item__txt">内容は普通のSPIでした。やるべきことは参考書を購入して１冊やればそれで十分なレベルだと思います。</p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </motion.div>
            );
        } else if(props.thisPage === 'entry') {
            return (
                <>
                <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
                    <p className="companyContentsWindow__update">2020.09.18更新</p>         
                    <div className="aboutCompany-item">
                        <div className="aboutCompany-item__left-col">
                            <h2 className="heading5">本選考 (22卒)</h2>
                            <p className="aboutCompany-item__job">エンジニア応募</p>　　
                        </div>
                        <div className="aboutCompany-item__right-col">
                            <section className="aboutCompany-Content">
                                <h3 className="heading5">今までに頑張り抜いたことを教えてください</h3>
                                <p className="aboutCompany-Content__txt">大学時代に洋菓子店でアルバイトについて話した。<br />
                                    クリスマスシーズンにケーキを1人50個予約販売するというノルマがありました。<br />
                                    そこで私はどうすれば確実に目標を達成できるのかを考え、すぐに方法と1日あたりの目標販売個数を考えました。方法としては、レジ担当だったことを活かし、接客時に宣伝したり、折り込みを買い物袋に入れたりしましたというエピソードを話すと以外にも反応が良かった。アルバイト経験が活きるかもしれない。
                                </p>
                            </section>
                        </div>
                    </div>
                    <div className="aboutCompany-item">
                        <div className="aboutCompany-item__left-col">
                            <h2 className="heading5">サマーインターンシップ(22卒)</h2>
                            <p className="aboutCompany-item__job">エンジニア応募</p>　　
                        </div>
                        <div className="aboutCompany-item__right-col">
                            <section className="aboutCompany-Content">
                                <h3 className="heading5">今までに頑張り抜いたことを教えてください</h3>
                                <p className="aboutCompany-Content__txt">大学時代に洋菓子店でアルバイトについて話した。<br />
                                    クリスマスシーズンにケーキを1人50個予約販売するというノルマがありました。<br />
                                    そこで私はどうすれば確実に目標を達成できるのかを考え、すぐに方法と1日あたりの目標販売個数を考えました。方法としては、レジ担当だったことを活かし、接客時に宣伝したり、折り込みを買い物袋に入れたりしましたというエピソードを話すと以外にも反応が良かった。アルバイト経験が活きるかもしれない。
                                </p>
                            </section>
                            <section className="aboutCompany-Content">
                                <h3 className="heading5">今までに頑張り抜いたことを教えてください</h3>
                                <p className="aboutCompany-Content__txt">大学時代に洋菓子店でアルバイトについて話した。<br />
                                    クリスマスシーズンにケーキを1人50個予約販売するというノルマがありました。<br />
                                    そこで私はどうすれば確実に目標を達成できるのかを考え、すぐに方法と1日あたりの目標販売個数を考えました。方法としては、レジ担当だったことを活かし、接客時に宣伝したり、折り込みを買い物袋に入れたりしましたというエピソードを話すと以外にも反応が良かった。アルバイト経験が活きるかもしれない。
                                </p>
                            </section>
                        </div>
                    </div>
                </motion.div>
                </>
            );
        } else if(props.thisPage === 'interview') {
            return (
                <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
                    <p className="companyContentsWindow__update">2020.09.18更新</p>         
                    <div className="aboutCompany-item">
                        <div className="aboutCompany-item__left-col">
                            <h2 className="heading5">本選考 (22卒)</h2>
                            <p className="aboutCompany-item__job">エンジニア応募</p>　　
                        </div>

                        <div className="aboutCompany-item__right-col">
                            <div className="aboutCompany-Content">
                                <section>
                                    <h3 className="heading5">1次面接</h3>
                                    <table className="about-overview">
                                        <th>選考結果</th>
                                        <td>合格</td>
                                    </table>
                                </section>
                                <section>
                                    <h3 className="heading5">面接内容</h3>
                                    <p className="aboutCompany-Content__txt">受付を済ませ、会議室に遠され、面接がスタート。その後、事業説明などの会社説明があり、最後に質疑応答があった。全部で1時間くらい　【質問内容】志望動機、学チカ、長所や短所、失敗、挫折経験など、そこからどう立ち直って成長したのかといったことを重点的に聞かれた。</p>
                                </section>
                            </div>
                            <div className="aboutCompany-Content">
                                <section>
                                    <h3 className="heading5">2次面接</h3>
                                    <table className="about-overview">
                                        <th>選考結果</th>
                                        <td>合格</td>
                                    </table>
                                </section>
                                <section>
                                    <h3 className="heading5">面接内容</h3>
                                    <p className="aboutCompany-Content__txt">受付を済ませ、会議室に遠され、面接がスタート。その後、事業説明などの会社説明があり、最後に質疑応答があった。全部で1時間くらい　【質問内容】志望動機、学チカ、長所や短所、失敗、挫折経験など、そこからどう立ち直って成長したのかといったことを重点的に聞かれた。</p>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="aboutCompany-item">
                        <div className="aboutCompany-item__left-col">
                            <h2 className="heading5">サマーインターンシップ(22卒)</h2>
                            <p className="aboutCompany-item__job">エンジニア応募</p>　　
                        </div>
                        <div className="aboutCompany-item__right-col">
                            <div className="aboutCompany-Content">
                                <section>
                                    <h3 className="heading5">1次面接</h3>
                                    <table className="about-overview">
                                        <th>選考結果</th>
                                        <td>合格</td>
                                    </table>
                                </section>
                                <section>
                                    <h3 className="heading5">面接内容</h3>
                                    <p className="aboutCompany-Content__txt">受付を済ませ、会議室に遠され、面接がスタート。その後、事業説明などの会社説明があり、最後に質疑応答があった。全部で1時間くらい　【質問内容】志望動機、学チカ、長所や短所、失敗、挫折経験など、そこからどう立ち直って成長したのかといったことを重点的に聞かれた。</p>
                                </section>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )
        }
    }
    return (
            <div className="companyContentsWindow">
                {renderTabMenuList()}
                <div className="companyContentsWindow__wrapper">
                    {renderContents()}
                </div>
            </div>      
    );
}

export default CompanyDetailContentsWindow;
