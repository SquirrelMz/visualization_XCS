// 柱状图1模块
(function() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var option = {
		    //title: {
		    //    text: '长三角各省份/直辖市专家发文数与总被引用次数分布',
		        //subtext: 'Data from: Heinz 2003'
		    //},
		    grid: {
		        left: '0%',
		        right: '0%',
		        bottom: '0%',
		        containLabel: true
		    },
		    tooltip: {
		        // trigger: 'axis',
		        showDelay: 0,
		        formatter: function (params) {
		            if (params.value.length > 1) {
		                return params.seriesName + ' :<br/>'
		                + params.value[0] + '次 '
		                + params.value[1] + '篇 ';
		            }
		            else {
		                return params.seriesName + ' :<br/>'
		                + params.name + ' : '
		                + params.value + '篇' ;
		            }
		        },
		        axisPointer: {
		            show: true,
		            type: 'cross',
		            lineStyle: {
		                type: 'dashed',
		                width: 1
		            }
		        }
		    },
		    toolbox: {
		        feature: {
		            dataZoom: {},
		            brush: {
		                type: ['rect', 'polygon', 'clear']
		            }
		        }
		    },
		    brush: {
		    },
		    legend: {
		        data: ['上海', '浙江', '江苏','安徽'],
		        left: 'center',
		        bottom: 10,
				textStyle: {
				  color: "rgba(255,255,255,.5)",
				  fontSize: "12"
				}
		    },
		    xAxis: [
		        {
		            type: 'value',
		            scale: true,
		            name: '总被引用次数',
		            axisLabel: {
		                formatter: '{value}'
		            },
		            splitLine: {
		                show: true
		            }
		            
		        }
		    ],
		    yAxis: [
		        {
		            type: 'value',
		            scale: true,
		            name: '总发文数',
		            axisLabel: {
		                formatter: '{value} '
		            },
		            splitLine: {
		                show: true
		            }
		        }
		    ],
		    series: [
		        {
		            name: '上海',
		            type: 'scatter',
		            emphasis: {
		                focus: 'series'
		            },
		            data: [[96278,803], [47766,873], [56741,2408], [38108, 664], [37703, 684],
		                [32018, 367], [29812, 193], [24443, 689], [24642, 365], [27097, 424],
		                [22870, 404], [23486, 556], [18683, 337], [30440, 2284], [17070, 404], [16344, 266],
		                [19066, 447], [15301, 322], [17067, 269], [25293, 754], [16519, 540],
		                [21812, 145], [21125, 896], [15525, 252],[15275,	481],[16957,	434],[18920,	527],[17014,	273],[15408,	308],[21071,	480],
		                [21299,	429],[22448,	737],[14302,	297],[20425,	735], [13096,	181], [16992,	138],
		                [16976,	593],[17114,	282],[19100,	982],[14420,	150],[12766,	307],[16413,	177],
		                [19443,	523],[12817,	323],[13408,	325],[14100,	411],[12734,	273],[14910,	327],
		                [16767,	316],[9883	,187],[13332,	261],[13537,	258],[17859,	567],[12841,	290],[10224,	196],
		                [10770,	243],[13288,	288],[11290,	224],[23289,	158],[10740,	520],[12114,	203],
		                [10719,	174],[10607,	185],[16621,	639],[9987, 207],[9412	,200],[13346,	367],[12567,	260]
		                ,[12517,	515],[10383,	332],[9936	,219],[10422,	304],[18274,	786],[10359,	281],[14553,	242]
		                ,[12638,	781],[20667,	129],[10190,	487],[13819,	586],[9371	,209],[9458	,196],[12048,	495]
		                ,[16885,	1750],[9038	,186],[9287	,200],[9923	,399],[10109,	258]
		                ,[10183,	246],[10792,	289],[17126,	194],[10412,	321],[11281,	487],[11918,	179],[13538,	508]
		                ,[10392,	135],[10167,	360],[12755,	899],[11040,	361],[11694,	116],[12380,	177],[11445,	219],[10790,	125]
		                ,[10343,	314],[10754,	161],[16386,	364],[12444,	136],[9605	,258],[12902,	144],[15144,	1343]
		                ,[8853	,235],[10373,	101],[9385	,291],[9103	,324],[11124,	262],[11179,	437],[9123	,265],[8192	,185]
		                ,[9286	,194],[13471,	331],[15146,	857],[11624,	559],[8727	,179],[15774,	399],[9623	,149]
		                ,[10239,	445],[7833	,216],[17070,	77],[18780,	228],[9284	,286],[10194,	373],[8005	,240],[8882	,231]
		                ,[10067,	355],[11522,	330],[8305	,270],[9678	,234],[8423	,193],[7769	,127],[11258,	456]
		                ,[7835	,181],[9293	,168],[13123,	274],[14130,	179],[10638,	118],[8056	,186],[13382,	162]
		                ,[8878	,170],[8192	,132],[9692	,629],[13648,	213],[8921	,145],[8365	,177],[13617,	1100],[8334	,201]
		                ,[8313	,216],[8344	,270],[8166	,159],[8650	,164],[7249	,180],[9006	,260],[6869	,149],[11519,	201]
		                ,[9765	,303],[8449	,277],[8157	,283],[8057	,102],[11832,	644],[10190,	138],[9573	,419],[7856	,247],[7763	,148]
		                ,[10724,	138],[7145	,194],[10010,	410],[9678	,117],[9348	,214],[8066	,347],[7582	,212],[7549	,140]
		                ,[7694	,297],[13519,	623],[5676	,185],[10196,	379],[6954	,242],[9076	,169],[10282,	212],[9176	,223]
		                ,[7168	,281],[7641	,279],[7241	,187],[9965	,426],[7350	,341],[7504	,169],[7817	,237],[8440	,232]
		            ],
		            markArea: {
		                silent: true,
		                itemStyle: {
		                    color: 'transparent',
		                    borderWidth: 1,
		                    borderType: 'dashed'
		                },
		                data: [[{
		                    name: '上海专家',
		                    xAxis: 'min',
		                    yAxis: 'min'
		                }, {
		                    xAxis: 'max',
		                    yAxis: 'max'
		                }]]
		            },
		            markPoint: {
		                data: [
		                    {type: 'max', name: 'Max'},
		                    {type: 'min', name: 'Min'}
		                ]
		            },
		            markLine: {
		                lineStyle: {
		                    type: 'solid'
		                },
		                data: [
		                    {type: 'average', name: '平均值'},
		                    { xAxis: 160 }
		                ]
		            }
		        },
		        {
		            name: '浙江',
		            type: 'scatter',
		            emphasis: {
		                focus: 'series'
		            },
		            data: [[30953,	607],[24644,	307],[46503,	171],[26089,	1191],[18879,	340],[34103,	2509],[17254,	521]
		                ,[17029,	231],[20525,	1026],[18059,	421],[18520,	242],[13290,	324],[13442,	343],[15588,	623],[14086,	396]
		                ,[23738,	391],[11144,	330],[16087,	669],[12720,	274],[17722,	196],[10039,	227],[12830,	362]
		                ,[8388	,226],[9322	,242],[12020,	304],[10250,	229],[10292,	554],[12215,	191],[10236,	334]
		                ,[12252,	135],[9777	,738],[18211,	193],[10173,	411],[9416	,302],[14544,	199],[10578,	403]
		                ,[6809	,264],[7584	,181],[11877,	278],[10674,	102],[13358,	153],[10816,	164],[8969	,298]
		                ,[10898,	140],[10728,	89],[8226	,381],[9748	,550],[10768,	192],[7077	,172],[9769	,525]
		                ,[15360,	219],[7979	,265],[8652	,511],[10152,	866],[8983	,399],[8394	,146],[7450	,298],[7883	,423]
		                ,[9164	,528],[6471	,166],[5737	,183],[7298	,344],[8015	,304],[5835	,220],[6504	,169],[7466	,107],[6418	,378]
		                ,[4803	,147],[6022	,146],[6793	,191],[4753	,181],[7113	,387],[7672	,274],[5685	,162],[7021	,336]
		                ,[5208	,140],[4293	,181],[6360	,122],[5187	,129],[11153,	254],[5627	,174],[5728	,141],[5865	,216]
		                ,[5792	,186],[8635	,159],[7970	,148],[5439	,131],[9106	,101],[5137	,223],[5202	,238],[6337	,183]
		                ,[6717	,526],[7557	,632],[7242	,110],[7092	,127],[5250	,193],[5504	,370],[4141	,193],[9073	,61],[5467	,159]
		                ,[6308	,371],[5646	,349],[4890	,232],[5322	,196],[5790	,289],[10276,	66],[6550	,97],[4993	,139]
		                ,[4050	,102],[5160	,164],[4466	,168],[5911	,335],[3504	,100],[6619	,414],[6405	,94],[4772	,151]
		                ,[5575	,378],[4068	,201],[4725	,402],[8030	,95],[5461	,643],[6764	,688],[4315	,356],[6232	,248]
		                ,[7429	,94],[4044	,102],[5121	,105],[6184	,599],[4003	,73],[4955	,156],[3751	,219],[6434	,72],[3784	,120]
		                ,[3152	,79],[4105	,198],[5045	,423],[4061	,136],[4486	,108],[4181,	143],[5517,	160],[3375,	118]
		                ,[6685,	609],[4270,	106],[4464,	192],[2760,	66],[5774,	111],[4508,	254],[7516,	118],[3371,	100]
		                ,[4505,	71],[6246,	554],[5368,	106],[4050,	95],[5220,	171],[4207,	195],[3538,	112],[4521,	111]
		                ,[5147,	278],[3888,	287],[4124,	259],[3999,	249],[4611,	227],[4872,	294],[3629,	179],[3083,	124]
		                ,[3869,	145],[3582,	79],[4089,	182],[4436,	178],[3827,	239],[3706,	215],[4374,	59],[4115,	215]
		                ,[16025,	78],[4243,	204],[5372,	116],[3398,	209],[4003,	70],[3177,	133],[10242,	322],[4487,	125]
		                ,[5394,	546],[3179,	107],[4231,	37],[3636,	267],[3446,	61],[3332,	118],[2570,	132],[2823,	115],[3774,	342]
		                ,[2908,	75],[3138,	80],[4487,	390],[2926,	94],[2289,	47],[4385,	356],[3211,	264],[2364,	206]
		                ,[4113,	353],[3303,	161],[4191,	369],[3032,	163]
		            ],
		            markArea: {
		                silent: true,
		                itemStyle: {
		                    color: 'transparent',
		                    borderWidth: 1,
		                    borderType: 'dashed'
		                },
		                data: [[{
		                    name: '浙江专家',
		                    xAxis: 'min',
		                    yAxis: 'min'
		                }, {
		                    xAxis: 'max',
		                    yAxis: 'max'
		                }]]
		            },
		            markPoint: {
		                data: [
		                    {type: 'max', name: 'Max'},
		                    {type: 'min', name: 'Min'}
		                ]
		            },
		            markLine: {
		                lineStyle: {
		                    type: 'solid'
		                },
		                data: [
		                    {type: 'average', name: '平均值'},
		                    { xAxis: 160 }
		                ]
		            }
		        },
		        {
		            name: '安徽',
		            type: 'scatter',
		            emphasis: {
		                focus: 'series'
		            },
		            data: [[54948,	648],[53962,	598],[45032,	620],[50024,	1265],[45617,	885],[29497,	656],[24876,	632]
		                ,[23804,	353],[17224,	245],[25248,	416],[23717,	205],[17612,	272],[22343,	861]
		                ,[22963,	1217],[19710,	142],[16441,	339],[13057,	200],[16995,	449],[16903,	474],[14557,	234]
		                ,[12096,	321],[12949,	267],[10720,	287],[15440,	463],[33324,	188],[10882,	305],[16361,	268]
		                ,[12469,	129],[11854,	895],[9089	,119],[13350,	644],[11382,	368],[8947	,343],[8236	,97],[8285	,212]
		                ,[8179	,133],[8581	,132],[7842	,338],[9358	,428],[7100	,138],[7876	,188],[5575	,129],[7347	,243]
		                ,[5643	,159],[7497	,168],[5833	,114],[5467	,97],[10036,	220],[7610	,115],[7521	,378],[5796	,145]
		                ,[5467	,136],[7275	,87],[5775	,339],[6534	,202],[5059	,190],[6515	,165],[11068,	107]
		                ,[5288	,261],[10140,	201],[5237	,133],[6635	,185],[6911	,209],[6577	,216],[7312	,129]
		                ,[4560	,100],[4499	,132],[4597	,78],[7261	,101],[4536	,96],[6903	,121],[4758	,118],[4853	,114]
		                ,[4944	,208],[3952	,115],[4969	,295],[7501	,476],[5094	,59],[4527	,366],[3654	,100],[7137	,111]
		                ,[4771	,234],[4213	,162],[4042	,62],[6555	,60],[4879	,308],[4020	,126],[4813	,166],[4729	,347]
		                ,[4357	,310],[6036	,369],[3245	,163],[4774	,85],[4027	,204],[4109	,257],[4188	,157],[3883	,124]
		                ,[2930	,109],[5287	,141],[4813	,334],[3245	,166],[4954	,102],[5543	,133],[6462	,811],[3565	,173]
		                ,[4062	,247],[3169	,129],[4761	,142],[10263,	75],[3265	,108],[3988	,73],[3805	,128]
		                ,[4437	,164],[4682	,220],[3195	,83],[3792	,57],[4331	,324],[3701	,118],[2586	,75],[7086	,66],[3463	,164]
		                ,[3393	,206],[2407	,64],[3816	,219],[2940	,111],[6206	,61],[3956	,66],[4562	,67],[3526	,69],[2759	,154]
		                ,[3465	,127],[3347	,85],[2896	,128],[2650	,149],[2078	,99],[4126	,178],[3087	,133],[2286	,128],[2952	,184],[3246	,337]
		                ,[2536	,136],[2479	,131],[2760	,262],[2995	,52],[2578	,191],[4034	,75],[2475	,101],[2328	,85],[2140	,105]
		                ,[7098	,88],[3046	,184],[3074	,158],[2424	,96],[2506	,136],[5660	,58],[3903	,95],[2340	,176]
		                ,[1782	,81],[2343	,275],[2503	,126],[2355	,108],[2088	,94],[2149	,142],[1865	,136],[2390	,222],[4142	,58]
		                ,[2589	,118],[2475	,106],[2256	,157],[3966	,42],[2010	,70],[2373	,87],[3306	,49],[2559	,88],[2995	,140]
		                ,[2043	,122],[2100	,99],[3297	,52],[6509	,79],[2156	,48],[1884	,152],[1982	,73],[2581	,86],[1632	,70],[2411	,154]
		                ,[1849	,128],[1533	,61],[3393	,51],[2197	,96],[1791	,50],[2711	,129],[2178	,76],[2877	,100]
		                ,[1716	,60],[1355	,75],[1666	,120],[2824	,138]
		            ],
		            markArea: {
		                silent: true,
		                itemStyle: {
		                    color: 'transparent',
		                    borderWidth: 1,
		                    borderType: 'dashed'
		                },
		                data: [[{
		                    name: '安徽专家',
		                    xAxis: 'min',
		                    yAxis: 'min'
		                }, {
		                    xAxis: 'max',
		                    yAxis: 'max'
		                }]]
		            },
		            markPoint: {
		                data: [
		                    {type: 'max', name: 'Max'},
		                    {type: 'min', name: 'Min'}
		                ]
		            },
		            markLine: {
		                lineStyle: {
		                    type: 'solid'
		                },
		                data: [
		                    {type: 'average', name: '平均值'},
		                    { xAxis: 160 }
		                ]
		            }
		        },
		        {
		            name: '江苏',
		            type: 'scatter',
		            emphasis: {
		                focus: 'series'
		            },
		            data: [[55069,	380],[45531,	1242],[35472,	659],[31545,	637],[35585,	860],[36846,	655],[27418,	321]
		                ,[26136,	488],[29402,	501],[23508,	829],[21225,	530],[18319,	511],[26428,	606],[20696,	464],
		                [20003,	323],[15836,	476],[19966,	215],[18739,	248],[17820,	542],[21311,	953],[16221,	589]
		                ,[14858,	309],[17549,	178],[15890,	489],[14296,	657],[12294,	314],[13401,	283],[20298,	372]
		                ,[13024,	388],[13628,	935],[15172,	105],[12549,	217],[11657,	485],[12582,	495],[13151,	218]
		                ,[13317,	661],[11310,	344],[10419,	238],[12172,	183],[13092,	836],[11055,	297],[12490,	527]
		                ,[12884,	155],[14120,	714],[14634,	509],[9472	,156],[15476,	745],[15096,	814],[9983	,382],[13752,	306]
		                ,[10011,	419],[9093	,211],[13610,	237],[25134,	119],[11869,	403],[10446,	139],[11539,	618]
		                ,[11941,	394],[12554,	669],[14352,	913],[10414,	324],[14640,	169],[10572,	354],[14038,	246]
		                ,[12852,	157],[17070,	77],[14277,	415],[11163,	667],[9935	,165],[10536,	198],[9795	,241],[11484,	387]
		                ,[10159,	370],[8643	,282],[12417,	564],[13617,	110],[8103	,327],[9672	,305],[7385	,170],[11107,	225]
		                ,[7930	,177],[8453	,397],[8967	,413],[7763	,204],[9107	,252],[8772	,146],[8371	,144],[11049,	912],[10448,	473]
		                ,[7748	,180],[10501,	586],[9459	,728],[8658	,360],[8889	,491],[7172	,273],[8235	,451],[7368	,502],[6654	,216],
		                [9069	,299],[7441	,465],[6207	,184],[8968	,166],[6205	,208],[9494	,617],[6268	,150],[4786	,134],
		                [9295	,572],[7927	,265],[8738	,235],[6045	,172],[8555	,733],[7743	,398],[7576	,341],[7083	,334],
		                [6930	,192],[6165	,254],[6162	,242],[7123	,244],[8970	,460],[4809	,161],[6675	,222],[5950	,338],
		                [5073	,201],[6828	,494],[7102	,102],[6183	,313],[8163	,243],[7391	,93],[4683	,110],[5075	,106],
		                [6803	,435],[5952	,193],[7664	,117],[6032	,226],[7698	,594],[7612	,87],[9718	,358],[18410,	97],
		                [4405	,122],[7111	,220],[7000	,72],[6599	,131],[6100	,391],[4520	,175],[4537	,179],[5881	,115],
		                [5042	,173],[6964	,623],[5351	,98],[6865	,149],[5407	,125],[5143	,185],[6096	,133],[6147	,325],
		                [6707	,100],[5456	,68],[5683	,195],[3893	,136],[5244	,147],[4896	,490],[4503	,270],[4543	,132],
		                [7077	,181],[4555	,92],[10145,	375],[4901	,129],[2669	,116],[4020	,120],[6134	,260],[4144	,153],
		                [4768	,174],[5219	,214],[6758	,199],[5793	,233],[4972	,453],[4999	,67]
		            ],
		            markArea: {
		                silent: true,
		                itemStyle: {
		                    color: 'transparent',
		                    borderWidth: 1,
		                    borderType: 'dashed'
		                },
		                data: [[{
		                    name: '江苏专家',
		                    xAxis: 'min',
		                    yAxis: 'min'
		                }, {
		                    xAxis: 'max',
		                    yAxis: 'max'
		                }]]
		            },
		            markPoint: {
		                data: [
		                    {type: 'max', name: 'Max'},
		                    {type: 'min', name: 'Min'}
		                ]
		            },
		            markLine: {
		                lineStyle: {
		                    type: 'solid'
		                },
		                data: [
		                    {type: 'average', name: 'Average'},
		                    { xAxis: 170 }
		                ]
		            }
		        }
		    ]
		};

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });

  // 数据变化
  //var dataAll = [
  //  { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
  //  { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
  //];

  //$(".bar h2 ").on("click", "a", function() {
   // option.series[0].data = dataAll[$(this).index()].data;
   // myChart.setOption(option);
  //});
})();

// 折线图定制
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .chart"));

  // (1)准备数据

  // 2. 指定配置和数据
let colorList = [
    '#CF4645','#B580B2','#29008A','#146A90','#8956FF','#70C9A8',
    '#bfbfbf','#595959',
    '#40a9ff','#1890ff',
    '#ffd666','#ffc53d','#ffc53d','#ffc069','#ffa940','#fa8c16',
    '#eccbd9','#ffadad','#ff6392','#ffc09f','#ffcb77','#ffe066','#ffd53e','#ffda3d','#adf7b6','#a0e8af','#80ed99','#07beb8','#17c3b2','#48cae4','#97d2fb','#83bcff','#91e5f6','#9381ff']
let colorListLen = colorList.length
let fontSizeList = [
    12,12.5,13,13.5,14,14.5,
    15,15.5,16,16.5,17,17.5,
    18,18.5,19,19.5,20,20.5,
    21,22,23,
    24]
let fontSizeListLen = fontSizeList.length
let customLabel = {
    color: colorList[Math.floor(Math.random()*colorListLen)],
    fontSize: fontSizeList[Math.floor(Math.random()*fontSizeListLen)]
}
let bgColor = '#fffcf9'
let canDraggable = false
option = {
                //backgroundColor: '#fffcf9',
                color: ['#37A2DA', '#32C5E9', '#67E0E3'],
                title: {
                    show: false,
                    x: 'center',
                    y: 'bottom',
                    // 文字的颜色,默认 #333。
                    color: '#666',
                    fontSize: 24
                },
                toolbox: {
                    show: true,
                    feature: {
                        // dataView: {readOnly: false},
                        // magicType: {type: ['line', 'bar']},
                        restore: {},
                        // saveAsImage: {}
                    }
                },
                itemStyle: {
                    color: bgColor
                },
                series: [
                    {
                        type: 'graph',
                        layout: 'force',
                        force: {
                            repulsion: 80,
                            edgeLength: 10
                        },
                        roam: 'scale',
                        // symbol: '',
                        // symbolSize: 0,
                        label: {
                            show: true,
                            color: 'auto',
                            fontSize: 14
                        },
                        data: [
                            {
                                name: '材料科学',
                                value: 148,
                                draggable: canDraggable,
                                itemStyle: {
                                    color: bgColor
                                },
                                label: {
                                    color: colorList[Math.floor(Math.random()*colorListLen)],
                                    fontSize: fontSizeList[Math.floor(Math.random()*fontSizeListLen)]
                                }
                            },
                            {
                                name: '地球与行星科学',
                                value: 25,
                                draggable: canDraggable,
                                itemStyle: {
                                    color: bgColor
                                },
                                label: {
                                    color: colorList[Math.floor(Math.random()*colorListLen)],
                                    fontSize: fontSizeList[Math.floor(Math.random()*fontSizeListLen)]
                                }
                            },
                            {
                                name: '工程学',
                                value: 77,
                                draggable: canDraggable,
                                itemStyle: {
                                    color: bgColor
                                },
                                label: {
                                    color: colorList[Math.floor(Math.random()*colorListLen)],
                                    fontSize: fontSizeList[Math.floor(Math.random()*fontSizeListLen)]
                                }
                            },
                            {
                                name: '化学',
                                value: 168,
                                draggable: canDraggable,
                                itemStyle: {
                                    color: bgColor
                                },
                                label: {
                                    color: colorList[Math.floor(Math.random()*colorListLen)],
                                    fontSize: fontSizeList[Math.floor(Math.random()*fontSizeListLen)]
                                }
                            },
                            {
                                name: '化学工程',
                                value: 20,
                                draggable: canDraggable,
                                itemStyle: {
                                    color: bgColor
                                },
                                label: {
                                    color: colorList[Math.floor(Math.random()*colorListLen)],
                                    fontSize: fontSizeList[Math.floor(Math.random()*fontSizeListLen)]
                                }
                            },
                            {
                                name: '环境科学',
                                value: 37,
                                draggable: canDraggable,
                                itemStyle: {
                                    color: bgColor
                                },
                                label: {
                                    color: colorList[Math.floor(Math.random()*colorListLen)],
                                    fontSize: fontSizeList[Math.floor(Math.random()*fontSizeListLen)]
                                }
                            },
                            {
                                name: '计算机科学',
                                value: 50,
                                draggable: canDraggable,
                                itemStyle: {
                                    color: bgColor
                                },
                                label: {
                                    color: colorList[Math.floor(Math.random()*colorListLen)],
                                    fontSize: fontSizeList[Math.floor(Math.random()*fontSizeListLen)]
                                }
                            },
                            {
                                name: '决策科学',
                                value: 1,
                                draggable: canDraggable,
                                itemStyle: {
                                    color: bgColor
                                },
                                label: {
                                    color: colorList[Math.floor(Math.random()*colorListLen)],
                                    fontSize: fontSizeList[Math.floor(Math.random()*fontSizeListLen)]
                                }
                            },
                            {
                                name: '医学',
                                value: 59,
                                draggable: canDraggable,
                                itemStyle: {
                                    color: bgColor
                                },
                                label: {
                                    color: colorList[Math.floor(Math.random()*colorListLen)],
                                    fontSize: fontSizeList[Math.floor(Math.random()*fontSizeListLen)]
                                }
                            },
                            {
                                name: '药理学,毒理学和制药学',
                                value: 12,
                                draggable: canDraggable,
                                // itemStyle: {
                                //     color: bgColor
                                // },
                                label: {
                                    color: colorList[Math.floor(Math.random()*colorListLen)],
                                    fontSize: fontSizeList[Math.floor(Math.random()*fontSizeListLen)]
                                }
                            },
                            {
                                name: '物理学和天文学',
                                value: 89,
                                draggable: canDraggable,
                                label: {
                                    color: colorList[Math.floor(Math.random()*colorListLen)],
                                    fontSize: fontSizeList[Math.floor(Math.random()*fontSizeListLen)]
                                }
                            },
                            {
                                name: '数学',
                                value: 7,
                                draggable: canDraggable,
                                label: {
                                    color: colorList[Math.floor(Math.random()*colorListLen)],
                                    fontSize: fontSizeList[Math.floor(Math.random()*fontSizeListLen)]
                                }
                            },
                            {
                                name: '生物化学、遗传学和分子生物学',
                                value: 69,
                                draggable: canDraggable,
                                label: {
                                    color: colorList[Math.floor(Math.random()*colorListLen)],
                                    fontSize: fontSizeList[Math.floor(Math.random()*fontSizeListLen)]
                                }
                            },
                            {
                                name: '神经系统科学',
                                value: 4,
                                draggable: canDraggable,
                                label: {
                                    color: colorList[Math.floor(Math.random()*colorListLen)],
                                    fontSize: fontSizeList[Math.floor(Math.random()*fontSizeListLen)]
                                }
                            },
                            {
                                name: '农业与生物科学',
                                value: 30,
                                draggable: canDraggable,
                                label: {
                                    color: colorList[Math.floor(Math.random()*colorListLen)],
                                    fontSize: fontSizeList[Math.floor(Math.random()*fontSizeListLen)]
                                }
                            },
                            {
                                name: '能源学',
                                value: 7,
                                draggable: canDraggable,
                                label: {
                                    color: colorList[Math.floor(Math.random()*colorListLen)],
                                    fontSize: fontSizeList[Math.floor(Math.random()*fontSizeListLen)]
                                }
                            },
                            {
                                name: '免疫和微生物学',
                                value: 2,
                                draggable: canDraggable,
                                label: {
                                    color: colorList[Math.floor(Math.random()*colorListLen)],
                                    fontSize: fontSizeList[Math.floor(Math.random()*fontSizeListLen)]
                                }
                            }
                        ]
                    }
                ]
            }
  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

  // 重新把配置好的新数据给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 饼形图定制
// 折线图定制
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie .chart"));

  option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function(p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }
    },
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      data: ["上海", "浙江", "江苏", "安徽"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "长三角地区专家分布",
        type: "pie",
        center: ["50%", "42%"],
        radius: ["40%", "60%"],
        color: [
          "#065aab",
          "#066eab",
          "#0682ab",
          "#0696ab",
          "#06a0ab",
          "#06b4ab",
          "#06c8ab",
          "#06dcab",
          "#06f0ab"
        ],
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: 207, name: "上海" },
          { value: 203, name: "浙江" },
          { value: 201, name: "江苏" },
          { value: 198, name: "安徽" },
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 学习进度柱状图模块
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));

  var option = {
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          }
      },
      legend: {
          data: ['人均被引用次数', '人均发文数'],
		  textStyle: {
		    color: "rgba(255,255,255,.5)",
		    fontSize: "12"
		  }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: {
          type: 'value',
		  boundaryGap: false,
		  axisLabel: {
		    textStyle: {
		      color: "rgba(255,255,255,.6)",
		      fontSize: 12
		    }
		  },
		  axisLine: {
		    lineStyle: {
		      color: "rgba(255,255,255,.2)"
		    }
		  },
      },
      yAxis: {
          type: 'category',
                  data: ['上海', '浙江', '江苏', '安徽'],
                  axisTick: { show: false },
                  axisLine: {
                    lineStyle: {
                      color: "rgba(255,255,255,.1)"
                    }
                  },
                  axisLabel: {
                    textStyle: {
                      color: "rgba(255,255,255,.6)",
                      fontSize: 12
                    }
                  },
          
                  splitLine: {
                    lineStyle: {
                      color: "rgba(255,255,255,.1)"
                    }
                  }
      },
      series: [
          {
              name: '人均被引用次数',
              type: 'bar',
              data: [13779, 7720, 10647, 7291],
			  itemStyle: {
			    normal: {
			      color: "#0184d5",
			      borderColor: "rgba(221, 220, 107, .1)",
			      borderWidth: 12
			    }
			  },
          },
          {
              name: '人均发文数',
              type: 'bar',
              data: [358, 260, 324, 202],
			  itemStyle: {
			    normal: {
			      color: "#00d887",
			      borderColor: "rgba(221, 220, 107, .1)",
			      borderWidth: 12
			    }
			  },
          }
      ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 折线图 优秀作品
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line1 .chart"));

  var option = {
      tooltip: {},
      legend: {
          data:  ['上海','浙江', '江苏', '安徽'],
		  bottom: "0%",
		  itemWidth: 10,
		  itemHeight: 10,
		  textStyle: {
		    color: "rgba(255,255,255,.5)",
		    fontSize: "12"
		  }
      },
      radar: {
          // shape: 'circle',
          name: {
              textStyle: {
                  color: '#fff',
                  backgroundColor: '#999',
                  borderRadius: 3,
                  padding: [3, 5]
              }
          },
		  radius: ["0%", "69%"],
          indicator: [
              { text: '专家人数' },
                  { text: '人均发文量' },
                  { text: '人均被引用量' },
                  { text: '人均专利数' },
                  { text: '人均H指数' }
          ]
      },
      series: [{
          //name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
               {
                      value: [207, 358, 13779, 26, 63],
                      name: '上海',
                      symbol: 'rect',
                      symbolSize: 5,
                      lineStyle: {
                          type: 'dashed'
                      }
                  },
                  {
                      value: [203, 260, 7720, 33, 33],
                      name: '浙江',
                      areaStyle: {
                          color: 'rgba(255, 255, 255, 0.5)'
                      }
                  },
                     {
                      value: [201, 324, 10647, 26, 56],
                      name: '江苏',
                      label: {
                          show: true,
                          formatter: function(params) {
                              return params.value;
                          }
                      }
                  },
                  {
                      value: [198, 202, 7291, 6, 68],
                      name: '安徽',
                      areaStyle: {
                          opacity: 0.9,
                          color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                              {
                                  color: '#B8D3E4',
                                  offset: 0
                              },
                              {
                                  color: '#72ACD1',
                                  offset: 1
                              }
                          ])
                      }
                  }
          ]
      }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
	window.addEventListener("resize", function() {
   // 让我们的图表调用 resize这个方法
   myChart.resize();
  });
})();

// 点位分布统计模块
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie1  .chart"));
  // 2. 指定配置项和数据
  var option = {
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      bottom: "0%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "地区分布",
        type: "pie",
        radius: ["10%", "70%"],
        center: ["50%", "50%"],
        roseType: "radius",
        // 图形的文字标签
        label: {
          fontSize: 10
        },
        // 链接图形和文字的线条
        labelLine: {
          // length 链接图形的线条
          length: 6,
          // length2 链接文字的线条
          length2: 8
        },
        data: [
                        {value: 5464, name: '上海'},
                        {value: 6606, name: '浙江'},
                        {value: 5186, name: '江苏'},
                        {value: 1212, name: '安徽'},
                    ]
      }
    ]
  };
  
        
  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();
