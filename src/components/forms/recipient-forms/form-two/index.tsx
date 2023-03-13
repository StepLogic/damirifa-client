import React, {useContext} from 'react'
// import styled from 'styled-components'
import {Button} from '@components/ui'
import PerfectScrollbar from 'react-perfect-scrollbar'
import InputSearchDropdown from '../../../ui/input-search-dropdown'
import {ModalContext} from '../../../ui/modal'

export type FormTwoProps = {}

export default function FormTwo(props: any) {

    const option = ['Value', 'Value', 'Value', 'Value']
    const {setTitle, toggleModal, title} = useContext(ModalContext)

    setTitle('Recipient’s Account Information (Outside Ghana)')


    return (
        <PerfectScrollbar
            options={{suppressScrollX: true, wheelPropagation: false}}
        >
            <section className={'px-3'}>
                <h2 className={'text-center mx-auto text-black'}>Angel Mensah</h2>
                <h3
                    className={'text-center text-damirifa-red text-capitalize mx-auto '}
                >
                    recipient
                </h3>
                <h3 className={'text-center  text-mute  mb-5 mt-4'}>
                    Your information will&nbsp;
                    <span className={'text-damirifa-red text-upper'}>Not</span>
                    &nbsp; be disclosed to the public
                </h3>
                <form>
                    <label>
                        recipient financial service provider&nbsp;<span>*</span>
                    </label>
                    <InputSearchDropdown
                        className={'mt-1'}
                        placeholder={'Choose an options'}
                        options={option}
                    />
                    <label
                        className={'my-4 d-block mx-auto'}
                        style={{width: 'fit-content'}}
                    >
                        OR
                    </label>

                    <label>QR Code</label>
                    <label className={'file-button'} htmlFor={'qr-code-recipient'}>
            <span style={{borderBottom: 'none', paddingBottom: '0'}}>
              Upload QR Code
            </span>
                    </label>
                    <input type={'file'} id={'qr-code-recipient'} className={'d-none'}/>
                    <h3 className={'text-mute mt-2'}>
                        The QR code must correspond to the account chosen to receive
                        donations.
                    </h3>
                </form>
                <div className={'d-flex flex-xl-row flex-column mx-auto mt-5'}>
                    <Button
                        className={'mx-auto mt-5 mt-xl-0 mb-xl-0 mb-2 '}
                        color={'var(--damirifa-red)'}
                        radius={20}
                        width={200}
                        height={45}
                        outline
                        onClick={() => props.previousStep()}
                    >
                        <span className={'text-damirifa-red text-size-md'}>Back</span>
                    </Button>
                    <Button
                        className={'mx-auto mt-2 mt-xl-0 mb-5 ms-xl-4'}
                        color={'var(--damirifa-red)'}
                        radius={20}
                        width={200}
                        height={45}
                        onClick={() => props.nextStep()}
                    >
                        <span className={'text-white text-size-md'}>Continue</span>
                    </Button>
                </div>
            </section>
        </PerfectScrollbar>
    )
}
